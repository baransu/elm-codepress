module Codepress exposing (State, Options, toHtml, Scroll, Pane(..))

{-| TODO: Add documentation
-}

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events as Events exposing (onInput)
import Markdown
import List.Extra as EList
import SyntaxHighlight as SH exposing (Highlight(..))
import Json.Decode as Decode


-- PUBLIC API


{-| TODO: Add documentation
-}
toHtml : Options msg -> Html msg
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
    , code : ( Result String String, Result String String )
    , scroll : Scroll
    , note : String
    }


{-| TODO: Add documentation
-}
type alias Scroll =
    { top : Int
    , left : Int
    }


{-| TODO: Add documentation
-}
type alias Options msg =
    { states : List State
    , position : Int
    , onScroll : Pane -> Scroll -> msg
    , onInput : String -> msg
    }



-- PRIVATE API


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


findCodeString : Pane -> State -> Result String String
findCodeString pane state =
    if pane == Left then
        Tuple.first state.code
    else
        Tuple.second state.code


findRegion : Pane -> State -> ( Int, Int )
findRegion pane state =
    case findHighlight pane state of
        Just ( _, positions ) ->
            positions

        _ ->
            ( 0, -1 )


unwrapState : Maybe State -> Pane -> ( Result String String, ( Int, Int ), Scroll )
unwrapState state pane =
    case state of
        Just state ->
            let
                str =
                    findCodeString pane state

                region =
                    findRegion pane state
            in
                ( str, region, state.scroll )

        Nothing ->
            ( Ok "", ( 0, -1 ), Scroll 0 0 )


viewLeft : Options msg -> Maybe State -> List (Html msg)
viewLeft options state =
    let
        ( content, ( start, end ), scroll ) =
            unwrapState state Left

        str =
            case content of
                Ok str ->
                    str

                Err err ->
                    err
    in
        [ div
            [ class "view-container"
            , style
                [ ( "transform"
                  , "translate("
                        ++ toString -scroll.left
                        ++ "px, "
                        ++ toString -scroll.top
                        ++ "px)"
                  )
                , ( "will-change", "transform" )
                ]
            ]
            [ SH.useTheme SH.oneDark
            , if String.length str == 0 then
                pre [] [ code [] [] ]
              else
                SH.elm str
                    |> Result.map (SH.highlightLines (Just Highlight) (start - 1) end)
                    |> Result.map (SH.toBlockHtml <| Just 1)
                    |> Result.withDefault
                        (pre [] [ code [] [ text str ] ])
            ]
        , textarea
            [ value str
            , classList
                [ ( "textarea", True )
                , ( "textarea-lc", True )
                ]
            , spellcheck False
            , onScroll <| options.onScroll Left
            , onInput options.onInput
            ]
            []
        ]


viewRight : Options msg -> Maybe State -> List (Html msg)
viewRight options state =
    let
        ( content, ( start, end ), _ ) =
            unwrapState state Right
    in
        [ div
            [ class "view-container" ]
          <|
            case content of
                Ok str ->
                    [ Markdown.toHtml [] ("```elixir\n" ++ str ++ "\n```")
                    , div
                        [ class "elmsh-line elmsh-hl"
                        , style
                            [ ( "position", "absolute" )
                            , ( "top", toString ((start - 1) * 15) ++ "px " )
                            , ( "width", "100%" )
                            , ( "height", toString ((end - start + 1) * 15) ++ "px" )
                            ]
                        ]
                        []
                    ]

                Err err ->
                    [ Markdown.toHtml [ class "error" ] ("```\n" ++ err ++ "\n```") ]
        ]


view : Options msg -> Html msg
view options =
    let
        state =
            getStateAt options.states options.position
    in
        div [ class "presentation" ]
            [ div [ class "pane left container" ] <| viewLeft options state
            , div [ class "pane right container" ] <| viewRight options state
            , viewNote options
            ]


viewNote : Options msg -> Html msg
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


onScroll msg =
    Events.on "scroll"
        (Decode.map2 Scroll
            (Decode.at [ "target", "scrollTop" ] Decode.int)
            (Decode.at [ "target", "scrollLeft" ] Decode.int)
            |> Decode.map msg
        )
