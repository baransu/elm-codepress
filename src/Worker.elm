port module Worker exposing (main)

import Platform
import Compiler
import Json.Decode
import Native.Hacks


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
            let
                command =
                    case Native.Hacks.tryCatch Compiler.tree source of
                        Ok output ->
                            compiled { position = position, output = output }

                        Err err ->
                            compiled { position = position, output = err }
            in
                ( source, command )


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
