start:
	elm-live src/Main.elm \
	 --output=example/elm.js \
	 --pushstate \
	 --open \
	 --debug \
	 --dir=./example

worker:
	elm-make src/Worker.elm --output=example/worker.js

build: worker
	elm-make src/Main.elm --output=example/elm.js --debug
