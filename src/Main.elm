module Main exposing (main)

import Html exposing (Html, text, button, div)
import Html.Events exposing (onClick)
import Html.Attributes exposing (class)
import Codepress exposing (State, Options, Pane(Left, Right), Scroll)
import List.Extra as EList
import Native.Hacks
import Compiler


type Msg
    = PrevState
    | NextState
    | OnScroll Pane Scroll
    | OnInput String


left : String
left =
    """module FizzBuzz exposing (fizzbuzz)


fizzbuzz : Int -> Int -> String
fizzbuzz from to =
  let
    fizzBuzz n =
        case (n % 3, n % 5) of
            (0, 0) -> "FizzBuzz"
            (0, _) -> "Fizz"
            (_, 0) -> "Buzz"
            _      -> toString n
  in List.range from to |> map (fizzBuzz >> toString) |> joinWords


joinWords : List String -> String
joinWords a = String.join " " a"""


(>>) : a -> b -> ( a, b )
(>>) a b =
    ( a, b )


defaultScroll =
    Scroll 0 0


states : List State
states =
    [ State
        [ Left >> ( 0, 0 ), Right >> ( 1, 1 ) ]
        ( Ok left, Ok "" )
        defaultScroll
        ""

    --
    , State
        [ Left >> ( 0, 0 ), Right >> ( 1, 1 ) ]
        ( Ok left, Ok "" )
        defaultScroll
        "Fancy module transpilation"

    --
    , State
        [ Left >> ( 3, 3 ), Right >> ( 4, 4 ) ]
        ( Ok left, Ok "" )
        defaultScroll
        "As you can see, there is awesome `Elchemy` -> `Elixir` type transpilation"

    --
    , State
        [ Left >> ( 4, 4 ), Right >> ( 5, 6 ) ]
        ( Ok left, Ok "" )
        defaultScroll
        "Every outputed function is curried thanks to curry macro"

    --
    , State
        [ Left >> ( 5, 12 ), Right >> ( 7, 20 ) ]
        ( Ok left, Ok "" )
        defaultScroll
        ""

    --
    , State
        [ Left >> ( 15, 15 ), Right >> ( 7, 20 ) ]
        ( Ok left, Ok "" )
        defaultScroll
        ""

    --
    , State
        [ Left >> ( 16, 16 ), Left >> ( 23, 26 ) ]
        ( Ok left, Ok "" )
        defaultScroll
        """### Do you know that:
* I'm markdown note
* `with code`
* [links](http://google.com)

```elixir
# and code snippets
def add(a, b), do: a + b
```
```elm
add : Int -> Int -> Int
add =
    (+)
```"""

    --
    , State
        [ Left >> ( 3, 12 ) ]
        ( Ok left, Ok "" )
        defaultScroll
        "And you can create single pane highlights"

    --
    , State
        [ Left >> ( 3, 12 ) ]
        ( Ok left, Ok "" )
        defaultScroll
        "left"
    ]


type alias Model =
    { position : Int, states : List State }


init : ( Model, Cmd Msg )
init =
    ( Model 0
        (List.map
            (\state ->
                { state
                    | code =
                        ( Tuple.first state.code, compileElchemy (Tuple.first state.code) )
                }
            )
            states
        )
    , Cmd.none
    )


options : Model -> Options Msg
options { position, states } =
    { position = position, states = states, onScroll = OnScroll, onInput = OnInput }


view : Model -> Html Msg
view model =
    div [ class "app" ] [ viewNavigation, (Codepress.toHtml << options) model ]


viewNavigation : Html Msg
viewNavigation =
    div [ class "navigation" ]
        [ button [ onClick PrevState ] [ text "previous" ]
        , button [ onClick NextState ] [ text "next" ]
        ]


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
            { state
                | highlights = []
                , code = ( Ok input, compileElchemy (Ok input) )
            }
    in
        { model
            | states =
                states
                    |> EList.updateAt position update
                    |> Maybe.withDefault []
        }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnScroll pane scroll ->
            ( updateScroll model pane scroll, Cmd.none )

        OnInput input ->
            ( updateState model input, Cmd.none )

        PrevState ->
            let
                position =
                    if model.position > 0 then
                        model.position - 1
                    else
                        model.position
            in
                ( { model | position = position }, Cmd.none )

        NextState ->
            let
                position =
                    if model.position < (List.length model.states - 1) then
                        model.position + 1
                    else
                        model.position
            in
                ( { model | position = position }, Cmd.none )


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        }


compileElchemy : Result String String -> Result String String
compileElchemy input =
    case input of
        Ok i ->
            Native.Hacks.tryCatch Compiler.tree i

        _ ->
            input
