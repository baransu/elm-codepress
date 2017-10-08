module Main exposing (main)

import Html exposing (Html)
import Codepress exposing (state)
import Codepress.Types exposing (Pane(..), Highlight, State)
import Codepress.Helpers exposing ((=>))


type Msg
    = CodepressMsg Codepress.Msg


type alias Model =
    { codepressModel : Codepress.Model
    }


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
  in List.range from to |> map (fizzBuzz => toString) |> joinWords


joinWords : List String -> String
joinWords a = String.join " " a


"""


states : List State
states =
    [ state (left ++ left ++ left ++ left) "" [ Left => ( 0, 0 ), Right => ( 1, 1 ) ]

    --
    , state left "" [ Left => ( 0, 0 ), Right => ( 1, 1 ) ]

    --
    , state left
        "As you can see, there is awesome `Elchemy` -> `Elixir` type transpilation"
        [ Left => ( 3, 3 ), Right => ( 4, 4 ) ]

    --
    , state left
        "Every outputed function is curried thanks to curry macro"
        [ Left => ( 4, 4 ), Right => ( 5, 6 ) ]

    --
    , state left "" [ Left => ( 5, 12 ), Right => ( 7, 20 ) ]

    --
    , state left "" [ Left => ( 15, 15 ), Right => ( 7, 20 ) ]

    --
    , state
        left
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
        [ Left => ( 16, 16 ), Left => ( 23, 26 ) ]

    --
    , state left "And you can create single pane highlights" [ Left => ( 3, 12 ) ]
    ]


init : ( Model, Cmd Msg )
init =
    ( { codepressModel = Codepress.initialModel states
      }
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        CodepressMsg subMsg ->
            let
                ( updated, cmd ) =
                    Codepress.update subMsg model.codepressModel
            in
                ( { model | codepressModel = updated }, Cmd.map CodepressMsg cmd )


view : Model -> Html Msg
view model =
    Html.map CodepressMsg (Codepress.view model.codepressModel)


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }
