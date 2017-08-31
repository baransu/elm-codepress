module Codepress exposing (State, Options, toHtml, Pane(..))

{-| TODO: Add documentation
-}

import Html exposing (..)
import Html.Attributes exposing (..)
import Markdown
import List.Extra as EList
import SyntaxHighlight as SH
import SyntaxHighlight.Line as SH exposing (Highlight(..))


-- PUBLIC API


{-| TODO: Add documentation
-}
toHtml : Options -> Html msg
toHtml =
    view


{-| TODO: Add documentation
-}
type Pane
    = Left
    | Right


{-| TODO: Add documentation
-}
type alias State =
    { highlights : List Highlight
    , code : List Code
    , note : String
    }


{-| TODO: Add documentation
-}
type alias Options =
    { states : List State
    , position : Int
    }



-- PRIVATE API


type alias Code =
    ( Pane, String )


type alias Highlight =
    ( Pane, ( Int, Int ) )


activeStyle : Bool -> List ( String, String )
activeStyle active =
    if active == True then
        [ ( "color", "#eff0eb" ) ]
    else
        []


getStateAt : List State -> Int -> Maybe State
getStateAt states position =
    EList.getAt position states


findHighlight : Pane -> State -> Maybe Highlight
findHighlight pane state =
    EList.find
        (\( p, _ ) -> p == pane)
        state.highlights


findCodeString : Pane -> State -> String
findCodeString pane state =
    let
        maybeCode =
            EList.find (\( p, _ ) -> p == pane) state.code
    in
        case maybeCode of
            Just ( _, code ) ->
                code

            Nothing ->
                ""


findRegion : Pane -> State -> ( Int, Int )
findRegion pane state =
    case findHighlight pane state of
        Just ( _, positions ) ->
            positions

        _ ->
            ( -1, -1 )


viewPane : Pane -> Maybe State -> List (Html msg)
viewPane pane state =
    let
        ( str, ( start, end ) ) =
            case state of
                Just state ->
                    let
                        str =
                            findCodeString pane state

                        region =
                            findRegion pane state
                    in
                        ( str, region )

                Nothing ->
                    ( "", ( -1, -1 ) )
    in
        [ SH.useTheme SH.monokai
        , SH.elm str
            |> Result.map (SH.highlightLines (Just Normal) (start - 1) end)
            |> Result.map (SH.toBlockHtml (Just 1))
            |> Result.withDefault
                (pre [] [ code [] [ text str ] ])
        ]


view : Options -> Html msg
view options =
    let
        state =
            getStateAt options.states options.position
    in
        div [ class "presentation" ]
            [ div [ class "pane left" ] <| viewPane Left state
            , div [ class "pane right" ] <| viewPane Right state
            , viewNote options
            ]


viewNote : Options -> Html msg
viewNote { states, position } =
    case getStateAt states position of
        Just { note } ->
            if note == "" then
                div [] []
            else
                div [ class "note" ]
                    [ Markdown.toHtml [ class "markdown-body" ] note
                    ]

        Nothing ->
            div [] []
