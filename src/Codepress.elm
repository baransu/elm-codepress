module Codepress exposing (Model, Msg, view, update, initialModel, state)

{-| Types
@docs Model, Msg

The Elm Architecture
@docs view, update, initialModel

Helpers
@docs state

-}

import Html exposing (Html, text, button, div)
import Html.Events exposing (onClick)
import Html.Attributes exposing (class)
import List.Extra as EList
import Native.Hacks
import Compiler
import Codepress.View as View exposing (Options, toHtml)
import Codepress.Helpers exposing ((=>))
import Codepress.Types exposing (State, Scroll, Pane(..), Highlight)


{-| TODO: documentation
-}
type Msg
    = PrevState
    | NextState
    | OnScroll Pane Scroll
    | OnInput String


{-| TODO: documentation
-}
type alias Model =
    { position : Int, states : List State }


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
initialModel : List State -> Model
initialModel states =
    { position = 0
    , states = states
    }


options : Model -> Options Msg
options { position, states } =
    { navigation = True
    , position = position
    , states = states
    , onScroll = OnScroll
    , onInput = OnInput
    }


{-| TODO: documentation
-}
view : Model -> Html Msg
view model =
    div [ class "app" ]
        [ (viewNavigation << options) model
        , (toHtml << options) model
        ]


viewNavigation : Options Msg -> Html Msg
viewNavigation { navigation } =
    if navigation == True then
        div [ class "navigation" ]
            [ button [ onClick PrevState ] [ text "previous" ]
            , button [ onClick NextState ] [ text "next" ]
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
