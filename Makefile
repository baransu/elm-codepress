start:
	elm-live example/Main.elm \
	 --output=example/elm.js \
	 --pushstate \
	 --open \
	 --debug \
	 --dir=./example

build:
	elm-make src/Main.elm --output=example/elm.js --debug
