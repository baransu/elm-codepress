port module Worker exposing (main)

import Platform
import Compiler
import Json.Decode


type Msg
    = Compile Int String


type alias Model =
    String


init : ( Model, Cmd Msg )
init =
    ( "", Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Compile position source ->
            ( source, compiled { position = position, output = Compiler.tree source } )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ compile (\{ position, input } -> Compile position input)
        ]


port compiled : { position : Int, output : String } -> Cmd msg


port compile : ({ position : Int, input : String } -> msg) -> Sub msg


main =
    Platform.program
        { init = init
        , update = update
        , subscriptions = subscriptions
        }
