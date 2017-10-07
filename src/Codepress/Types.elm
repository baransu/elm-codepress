module Codepress.Types exposing (..)

{-| Stuff
@docs Pane, Highlight, State, Scroll
-}


{-| TODO: Add documentation
-}
type Pane
    = Left
    | Right


{-| TODO: Add documentation
-}
type alias Highlight =
    ( Pane, ( Int, Int ) )


{-| TODO: Add documentation
-}
type alias State =
    { highlights : List Highlight
    , code : ( String, Result String String, Result String String )
    , scroll : Scroll
    , note : String
    }


{-| TODO: Add documentation
-}
type alias Scroll =
    { top : Int
    , left : Int
    }
