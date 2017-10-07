module Codepress.View exposing (Options, toHtml)

{-| TODO: Add documentation
-}

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events as Events exposing (onInput)
import Markdown
import List.Extra as EList
import SyntaxHighlight as SH exposing (Highlight(..))
import Json.Decode as Decode
import Codepress.Helpers exposing ((=>))
import Codepress.Types as Types exposing (Scroll, State, Pane(..))


-- PUBLIC API


{-| TODO: Add documentation
-}
toHtml : Options msg -> Html msg
toHtml =
    view


{-| TODO: Add documentation
-}
type alias Options msg =
    { navigation : Bool
    , states : List State
    , position : Int
    , onScroll : Pane -> Scroll -> msg
    , onInput : String -> msg
    }



-- PRIVATE API


activeStyle : Bool -> List ( String, String )
activeStyle active =
    if active == True then
        [ "color" => "#eff0eb" ]
    else
        []


getStateAt : List State -> Int -> Maybe State
getStateAt states position =
    EList.getAt position states


findHighlight : Pane -> State -> Maybe Types.Highlight
findHighlight pane state =
    EList.find
        (\( p, _ ) -> p == pane)
        state.highlights


findCodeString : Pane -> State -> Result String String
findCodeString pane state =
    let
        ( _, left, right ) =
            state.code
    in
        if pane == Left then
            left
        else
            right


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
                [ "transform" => ("translate(" ++ toString -scroll.left ++ "px, " ++ toString -scroll.top ++ "px)")
                , "will-change" => "transform"
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
            , class "textarea-lc"
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
                            [ "position" => "absolute"
                            , "top" => ((toString ((start - 1) * 15)) ++ "px")
                            , "width" => "100%"
                            , "height" => ((toString ((end - start + 1) * 15)) ++ "px")
                            ]
                        ]
                        []
                    ]

                Err err ->
                    [ Markdown.toHtml [ class "error" ] ("```\n" ++ err ++ "\n```") ]
        ]


presentationStyle : Options msg -> List ( String, String )
presentationStyle { navigation } =
    if navigation == True then
        [ "height" => "calc(100vh - 40px)" ]
    else
        [ "height" => "100vh" ]


view : Options msg -> Html msg
view options =
    let
        state =
            getStateAt options.states options.position
    in
        div [ class "presentation", style <| presentationStyle options ]
            [ div [ class "pane" ] <| viewLeft options state
            , div [ class "pane" ] <| viewRight options state
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
