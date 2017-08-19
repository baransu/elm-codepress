module Codepress exposing (Range, Options, toHtml, left, right)

import Html exposing (..)
import Html.Attributes exposing (..)
import Markdown
import List.Extra as EList


-- PUBLIC API


left : Int -> Int -> Highlight
left a b =
    ( Left, ( a, b ) )


right : Int -> Int -> Highlight
right a b =
    ( Right, ( a, b ) )


toHtml : Options -> Html msg
toHtml =
    view


type alias Range =
    { highlights : List Highlight
    , note : String
    }


type alias Options =
    { left : String
    , right : String
    , ranges : List Range
    , position : Int
    }



-- PRIVATE API


type alias Highlight =
    ( Pane, ( Int, Int ) )


type Pane
    = Left
    | Right


activeStyle : Bool -> List ( String, String )
activeStyle active =
    if active == True then
        [ ( "color", "#eff0eb" ) ]
    else
        []


getRangeAt : List Range -> Int -> Maybe Range
getRangeAt ranges position =
    EList.getAt position ranges


findHighlight : Pane -> Range -> Maybe Highlight
findHighlight pane range =
    EList.find
        (\( p, _ ) -> p == pane)
        range.highlights


lineOfCode : List Range -> Pane -> Int -> Int -> String -> Html msg
lineOfCode ranges pane position index str =
    let
        active =
            case getRangeAt ranges position of
                Just range ->
                    let
                        ( start, end ) =
                            case findHighlight pane range of
                                Just ( _, positions ) ->
                                    positions

                                _ ->
                                    ( -1, -1 )
                    in
                        index >= start && index <= end

                _ ->
                    False
    in
        pre
            [ style (activeStyle active) ]
            [ code [] [ (text << toString) index, text (" " ++ str) ]
            ]


view : Options -> Html msg
view options =
    div [ class "presentation" ]
        [ div [ class "pane left" ] <| viewPane Left options.left options
        , div [ class "pane right" ] <| viewPane Right options.right options
        , viewNote options.ranges options.position
        ]


viewPane : Pane -> String -> Options -> List (Html msg)
viewPane pane code { ranges, position } =
    code |> String.lines |> List.indexedMap (lineOfCode ranges pane position)


viewNote : List Range -> Int -> Html msg
viewNote ranges position =
    case getRangeAt ranges position of
        Just range ->
            if range.note == "" then
                div [] []
            else
                div [ class "note" ]
                    [ Markdown.toHtml [ class "markdown-body" ] range.note
                    ]

        Nothing ->
            div [] []
