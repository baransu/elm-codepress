module Codepress exposing (Model, Msg, view, update, initialModel, state)

{-| Types
@docs Model, Msg

The Elm Architecture
@docs view, update, initialModel

Helpers
@docs state

-}

import Html exposing (Html, text, button, div, h2, label, input)
import Html.Events exposing (onClick)
import Html.Attributes exposing (class, type_)
import List.Extra as EList
import Native.Hacks
import Compiler
import Codepress.View as View exposing (toHtml)
import Codepress.Helpers exposing ((=>))
import Codepress.Types exposing (Options, State, Scroll, Pane(..), Highlight)


{-| TODO: documentation
-}
type Msg
    = PrevState
    | NextState
    | OnScroll Pane Scroll
    | OnInput String
    | OnCollapse


{-| TODO: documentation
-}
type alias Model =
    { position : Int, states : List State, title : String, noteCollapse : Bool }


{-| TODO: documentation
-}
state : String -> String -> List Highlight -> State
state code note highlights =
    { highlights = highlights
    , code = ( code, Ok code, compileElchemy (Ok code) )
    , scroll = Scroll 0 0
    , note = note
    }


{-| TODO: documentation
-}
initialModel : List State -> String -> Model
initialModel states title =
    { position = 0
    , title = title
    , states = states
    , noteCollapse = False
    }


options : Model -> Options Msg
options { position, states, noteCollapse } =
    { noteCollapse = noteCollapse
    , navigation = True
    , position = position
    , states = states
    , onScroll = OnScroll
    , onInput = OnInput
    }


{-| TODO: documentation
-}
view : Model -> Html Msg
view model =
    let
        opt =
            options model
    in
        div [ class "app" ]
            [ viewNavigation opt model
            , toHtml opt
            ]


viewNavigation : Options Msg -> Model -> Html Msg
viewNavigation { navigation } { position, states, title } =
    let
        count =
            (toString position) ++ " / " ++ (states |> List.length |> flip (-) 1 |> toString)
    in
        if navigation == True then
            div [ class "navigation" ]
                [ div [ class "slides" ] [ text <| "Slides: " ++ count ]
                , h2 [] [ text title ]
                , div [ class "buttons" ]
                    [ label []
                        [ input [ type_ "checkbox", onClick OnCollapse ] []
                        , text "Show notes"
                        ]
                    , div []
                        [ button [ onClick PrevState ] [ text "Previous slide" ]
                        , button [ onClick NextState ] [ text "Next slide" ]
                        ]
                    ]
                ]
        else
            div [] []


updateScroll : Model -> Pane -> Scroll -> Model
updateScroll model pane scroll =
    let
        { position, states } =
            model
    in
        { model
            | states =
                states
                    |> EList.updateAt position (\a -> { a | scroll = scroll })
                    |> Maybe.withDefault []
        }


updateState : Model -> String -> Model
updateState model input =
    let
        { states, position } =
            model

        update state =
            let
                ( fst, _, _ ) =
                    state.code
            in
                { state
                    | highlights = []
                    , code = ( fst, Ok input, compileElchemy (Ok input) )
                }
    in
        { model
            | states =
                states
                    |> EList.updateAt position update
                    |> Maybe.withDefault []
        }


resetState : Model -> List State
resetState { states, position } =
    let
        update state =
            let
                ( fst, _, _ ) =
                    state.code
            in
                { state
                    | highlights = []
                    , code = ( fst, Ok fst, compileElchemy (Ok fst) )
                }
    in
        states
            |> EList.updateAt position update
            |> Maybe.withDefault []


{-| TODO: documentation
-}
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnCollapse ->
            ({ model | noteCollapse = not model.noteCollapse }) => Cmd.none

        OnScroll pane scroll ->
            (updateScroll model pane scroll) => Cmd.none

        OnInput input ->
            (updateState model input) => Cmd.none

        PrevState ->
            let
                position =
                    if model.position > 0 then
                        model.position - 1
                    else
                        model.position
            in
                { model
                    | states = resetState model
                    , position = position
                }
                    => Cmd.none

        NextState ->
            let
                position =
                    if model.position < (List.length model.states - 1) then
                        model.position + 1
                    else
                        model.position
            in
                { model
                    | states = resetState model
                    , position = position
                }
                    => Cmd.none


compileElchemy : Result String String -> Result String String
compileElchemy input =
    case input of
        Ok i ->
            Native.Hacks.tryCatch Compiler.tree i

        _ ->
            input
