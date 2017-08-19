module Main exposing (main)

import Html exposing (Html)
import Keyboard exposing (KeyCode)
import Codepress exposing (State, Options, Pane(Left, Right))


type Msg
    = KeyDown KeyCode


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


right : String
right =
    """# Compiled using Elchemy v0.4.13
defmodule FizzBuzz do
  use Elchemy

  @spec fizzbuzz(integer, integer) :: String.t
  curry fizzbuzz/2
  def fizzbuzz(from, to) do
    fizz_buzz = fn(n) -> case {rem(n, 3), rem(n, 5)} do
      {0, 0} ->
        "FizzBuzz"
      {0, _} ->
        "Fizz"
      {_, 0} ->
        "Buzz"
      _ ->
        to_string().(n)
    end end
    XList.range.(from).(to)
    |> (map().((fizz_buzz >>> to_string()))).()
    |> (join_words()).()
  end

  @spec join_words(list(String.t)) :: String.t
  curryp join_words/1
  defp join_words(a) do
    XString.join.(" ").(a)
  end

end"""


(>>) : a -> b -> ( a, b )
(>>) a b =
    ( a, b )


defaultCode =
    []


states : List State
states =
    [ State
        [ Left >> ( 0, 0 ), Right >> ( 1, 1 ) ]
        [ Left >> left, Right >> right ]
        ""

    --
    , State
        [ Left >> ( 0, 0 ), Right >> ( 1, 1 ) ]
        [ Left >> left, Right >> right ]
        "Fancy module transpilation"

    --
    , State
        [ Left >> ( 3, 3 ), Right >> ( 4, 4 ) ]
        [ Left >> left, Right >> right ]
        "As you can see, there is awesome `Elchemy` -> `Elixir` type transpilation"

    --
    , State
        [ Left >> ( 4, 4 ), Right >> ( 5, 6 ) ]
        [ Left >> left, Right >> right ]
        "Every outputed function is curried thanks to curry macro"

    --
    , State
        [ Left >> ( 5, 12 ), Right >> ( 7, 20 ) ]
        [ Left >> left, Right >> right ]
        ""

    --
    , State
        [ Left >> ( 15, 15 ), Right >> ( 7, 20 ) ]
        [ Left >> left, Right >> right ]
        ""

    --
    , State
        [ Left >> ( 16, 16 ), Left >> ( 23, 26 ) ]
        [ Left >> left, Right >> right ]
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
        [ Left >> left, Right >> right ]
        "And you can create single pane highlights"

    --
    , State
        [ Left >> ( 3, 12 ) ]
        [ Left >> left, Right >> right ]
        "left"

    --
    , State
        [ Right >> ( 4, 20 ) ]
        [ Left >> left, Right >> right ]
        "or right"

    --
    , State
        []
        [ Left >> left, Right >> right ]
        "Do you know we can switch panels content too?"

    --
    , State
        []
        [ Left >> right, Right >> left ]
        "Tada!!!"

    --
    , State
        []
        [ Left >> left, Right >> right ]
        "Or you can even hide left/right code"

    --
    , State
        []
        [ Right >> right ]
        "left"

    --
    , State
        []
        [ Left >> left ]
        "or right"
    ]


type alias Model =
    Int


init : ( Model, Cmd Msg )
init =
    ( 0, Cmd.none )


options : Int -> Options
options position =
    { position = position, states = states }


view : Model -> Html Msg
view model =
    (Codepress.toHtml << options) model


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        KeyDown code ->
            ( case code of
                -- UP
                38 ->
                    if model > 0 then
                        model - 1
                    else
                        model

                -- DOWN
                40 ->
                    if model < (List.length states - 1) then
                        model + 1
                    else
                        model

                _ ->
                    model
            , Cmd.none
            )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Keyboard.downs KeyDown
        ]


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }
