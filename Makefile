start:
	elm-live example/Main.elm \
	 --output=example/elm.js \
	 --pushstate \
	 --open \
	 --dir=./example \
	# --debug \

build:
	elm-make src/Main.elm --output=example/elm.js --debug
