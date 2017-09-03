port module Main exposing (main)

import Html exposing (Html, text, button, div)
import Html.Events exposing (onClick)
import Html.Attributes exposing (class)
import Codepress exposing (State, Options, Pane(Left, Right), Scroll)
import List.Extra as EList


type Msg
    = PrevState
    | NextState
    | Compiled Int String
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



-- TODO: add batch compile


states : List State
states =
    [ State
        [ Left >> ( 0, 0 ), Right >> ( 1, 1 ) ]
        ( left, "" )
        defaultScroll
        ""

    --
    , State
        [ Left >> ( 0, 0 ), Right >> ( 1, 1 ) ]
        ( left, "" )
        defaultScroll
        "Fancy module transpilation"

    --
    , State
        [ Left >> ( 3, 3 ), Right >> ( 4, 4 ) ]
        ( left, "" )
        defaultScroll
        "As you can see, there is awesome `Elchemy` -> `Elixir` type transpilation"

    --
    , State
        [ Left >> ( 4, 4 ), Right >> ( 5, 6 ) ]
        ( left, "" )
        defaultScroll
        "Every outputed function is curried thanks to curry macro"

    --
    , State
        [ Left >> ( 5, 12 ), Right >> ( 7, 20 ) ]
        ( left, "" )
        defaultScroll
        ""

    --
    , State
        [ Left >> ( 15, 15 ), Right >> ( 7, 20 ) ]
        ( left, "" )
        defaultScroll
        ""

    --
    , State
        [ Left >> ( 16, 16 ), Left >> ( 23, 26 ) ]
        ( left, "" )
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
        ( left, "" )
        defaultScroll
        "And you can create single pane highlights"

    --
    , State
        [ Left >> ( 3, 12 ) ]
        ( left, "" )
        defaultScroll
        "left"
    ]


type alias Model =
    { position : Int, states : List State }


init : ( Model, Cmd Msg )
init =
    let
        batchData =
            List.indexedMap
                (\position { code } ->
                    { position = position, input = Tuple.first code }
                )
                states
    in
        ( Model 0 states, batchCompile batchData )


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


updateScroll : Model -> Pane -> Scroll -> List State
updateScroll { position, states } pane scroll =
    states
        |> EList.updateAt position (\a -> { a | scroll = scroll })
        |> Maybe.withDefault []


updateCodeLeft : Model -> String -> List State
updateCodeLeft { position, states } str =
    let
        updateState state =
            { state | code = ( str, Tuple.second state.code ) }
    in
        states
            |> EList.updateAt position updateState
            |> Maybe.withDefault []


updateCodeRight : Model -> Int -> String -> List State
updateCodeRight { states } position str =
    let
        updateState state =
            { state | code = ( Tuple.first state.code, str ) }
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
                    updateScroll model pane scroll
            in
                ( { model | states = states }, Cmd.none )

        OnInput str ->
            let
                states =
                    updateCodeLeft model str
            in
                ( { model | states = states }, compile { position = model.position, input = str } )

        Compiled position output ->
            let
                states =
                    updateCodeRight model position output
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


type alias CompileData =
    { position : Int
    , input : String
    }


port compile : CompileData -> Cmd msg


port batchCompile : List CompileData -> Cmd msg


port compiled : ({ position : Int, output : String } -> msg) -> Sub msg


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ compiled (\{ position, output } -> Compiled position output)
        ]


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }
