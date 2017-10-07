start:
	elm-live src/Main.elm \
	 --output=example/elm.js \
	 --pushstate \
	 --open \
	 --debug \
	 --dir=./example

build: worker
	elm-make src/Main.elm --output=example/elm.js --debug
