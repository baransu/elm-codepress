module Main exposing (main)

import Html exposing (Html, text, button, div)
import Html.Events exposing (onClick)
import Html.Attributes exposing (class)
import Keyboard exposing (KeyCode)
import Codepress exposing (State, Options, Pane(Left, Right), Scroll)
import List.Extra as EList
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
        ( left, Compiler.tree left )
        defaultScroll
        ""

    --
    , State
        [ Left >> ( 0, 0 ), Right >> ( 1, 1 ) ]
        ( left, Compiler.tree left )
        defaultScroll
        "Fancy module transpilation"

    --
    , State
        [ Left >> ( 3, 3 ), Right >> ( 4, 4 ) ]
        ( left, Compiler.tree left )
        defaultScroll
        "As you can see, there is awesome `Elchemy` -> `Elixir` type transpilation"

    --
    , State
        [ Left >> ( 4, 4 ), Right >> ( 5, 6 ) ]
        ( left, Compiler.tree left )
        defaultScroll
        "Every outputed function is curried thanks to curry macro"

    --
    , State
        [ Left >> ( 5, 12 ), Right >> ( 7, 20 ) ]
        ( left, Compiler.tree left )
        defaultScroll
        ""

    --
    , State
        [ Left >> ( 15, 15 ), Right >> ( 7, 20 ) ]
        ( left, Compiler.tree left )
        defaultScroll
        ""

    --
    , State
        [ Left >> ( 16, 16 ), Left >> ( 23, 26 ) ]
        ( left, Compiler.tree left )
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
        ( left, Compiler.tree left )
        defaultScroll
        "And you can create single pane highlights"

    --
    , State
        [ Left >> ( 3, 12 ) ]
        ( left, Compiler.tree left )
        defaultScroll
        "left"
    ]


type alias Model =
    { position : Int, states : List State }


init : ( Model, Cmd Msg )
init =
    ( Model 0 states, Cmd.none )


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


updateStateScroll : Model -> Pane -> Scroll -> List State
updateStateScroll { position, states } pane scroll =
    states
        |> EList.updateAt position (\a -> { a | scroll = scroll })
        |> Maybe.withDefault []


updateStateContent : Model -> String -> List State
updateStateContent { position, states } str =
    let
        updateState state =
            { state | code = ( str, Compiler.tree str ) }
    in
        states
            |> EList.updateAt position updateState
            |> Maybe.withDefault []


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnScroll pane scroll ->
            let
                states =
                    updateStateScroll model pane scroll
            in
                ( { model | states = states }, Cmd.none )

        OnInput str ->
            let
                states =
                    updateStateContent model str
            in
                ( { model | states = states }, Cmd.none )

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


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [-- Keyboard.downs KeyDown
        ]


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }
