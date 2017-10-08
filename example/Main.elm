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
    [ state left """
### Welcome to Elchemy examples.
Use buttons it the top right corner to go through slides.
You can even jump into code and modify Elchemy code on the left and check how Elixir output would look like on the right.

Have fun!

    """ [ Left => ( 0, 0 ), Right => ( 1, 1 ) ]

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
    , state left """
### Lorem ipsum dolor sit amet enim. Etiam ullamcorper.
Suspendisse a pellentesque dui, non felis.
Maecenas malesuada elit lectus felis, malesuada ultricies.
Curabitur et ligula. Ut molestie a, ultricies porta urna.
Vestibulum commodo volutpat a, convallis ac, laoreet enim.
Phasellus fermentum in, dolor. Pellentesque facilisis.
Nulla imperdiet sit amet magna.
Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.
Aliquam erat ac ipsum. Integer aliquam purus.
Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus.
Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing.
Cum sociis natoque penatibus et ultrices volutpat.
Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer.
Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue.
Lorem ipsum primis in nibh vel risus. Sed vel lectus. Ut sagittis, ipsum dolor quam.
    """ [ Left => ( 15, 15 ), Right => ( 7, 20 ) ]

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
    ( { codepressModel = Codepress.initialModel states "Advanced Elchemy example"
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
