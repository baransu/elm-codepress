module Codepress exposing (State, Options, toHtml, Pane(..))

import Html exposing (..)
import Html.Attributes exposing (..)
import Markdown
import List.Extra as EList


-- PUBLIC API


toHtml : Options -> Html msg
toHtml =
    view


type Pane
    = Left
    | Right


type alias State =
    { highlights : List Highlight
    , code : List Code
    , note : String
    }


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


findCode : Pane -> State -> Maybe Code
findCode pane state =
    EList.find
        (\( p, _ ) -> p == pane)
        state.code


toText : a -> Html msg
toText =
    text << toString


inHighlight : Pane -> State -> Int -> Bool
inHighlight pane state index =
    let
        ( start, end ) =
            case findHighlight pane state of
                Just ( _, positions ) ->
                    positions

                _ ->
                    ( -1, -1 )
    in
        index >= start && index <= end


lineOfCode : Pane -> Maybe State -> Int -> String -> Html msg
lineOfCode pane state index str =
    let
        active =
            case state of
                Just state ->
                    inHighlight pane state index

                _ ->
                    False
    in
        pre
            [ style (activeStyle active) ]
            [ code [] [ toText index, text (" " ++ str) ]
            ]


viewPane : Pane -> Maybe State -> List (Html msg)
viewPane pane state =
    let
        code =
            case state of
                Just state ->
                    case findCode pane state of
                        Just ( _, code ) ->
                            code

                        Nothing ->
                            ""

                Nothing ->
                    ""
    in
        if code == "" then
            []
        else
            code |> String.lines |> List.indexedMap (lineOfCode pane state)


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
