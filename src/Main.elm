module Main exposing (main)

import Html exposing (Html)
import Keyboard exposing (KeyCode)
import Codepress exposing (Range, Options, left, right)


type Msg
    = KeyDown KeyCode


ranges : List Range
ranges =
    [ Range [ left 0 0, right 1 1 ] "" -- module
    , Range [ left 0 0, right 1 1 ] "Fancy module transpilation" -- module
    , Range [ left 3 3, right 4 4 ] "As you can see, there is awesome `Elchemy` -> `Elixir` type transpilation" -- fizzBuzz type signature
    , Range [ left 4 4, right 5 6 ] "Every outputed function is curried thanks to curry macro" -- fizzBuzz head
    , Range [ left 5 12, right 7 20 ] "" -- fizzBuzz body
    , Range [ left 15 15, right 22 22 ] "" -- joinWords type signature
    , Range [ left 16 16, right 23 26 ] """### Do you know that:
* I'm markdown note
* `with code`
* [links](http://google.com)

```elixir
def add(a, b), do: a + b
# and code snippets
```""" -- joinWords body
    , Range [ left 3 12 ] "And you can create single pane highlights" -- joinWords type signature
    , Range [ left 3 12 ] "left" -- joinWords type signature
    , Range [ right 4 20 ] "or right" -- joinWords type signature
    ]


leftCode : String
leftCode =
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


rightCode : String
rightCode =
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


type alias Model =
    Int


init : ( Model, Cmd Msg )
init =
    ( 0, Cmd.none )


options : Int -> Options
options position =
    { position = position, ranges = ranges, left = leftCode, right = rightCode }


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
                    if model < (List.length ranges - 1) then
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
