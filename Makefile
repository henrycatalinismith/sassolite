build/parser.jison:
	cat src/parser/macros.l > build/parser.jison
	cat src/parser/tokens.l >> build/parser.jison
	cat src/parser/grammar.y >> build/parser.jison
	sed -e '1,2d' src/parser/selectors.y >> build/parser.jison
	sed -e '1,2d' src/parser/styles.y >> build/parser.jison
	sed -e '1,2d' src/parser/variables.y >> build/parser.jison
	sed -e '1,2d' src/parser/expressions.y >> build/parser.jison

build/parser.js: node_modules build/parser.jison
	./node_modules/.bin/jison build/parser.jison \
		--module-type amd \
		--outfile build/tmp1.js
	sed -e '1,2d' build/tmp1.js > build/tmp2.js
	sed '1s/.*/define(["node\/index"], function(Node) {/' build/tmp2.js \
		> build/parser.js

build/sassolite.js: build/parser.js
	./node_modules/.bin/r.js -o build/vanilla/config.js \
		name=../node_modules/almond/almond \
		include=./sassolite \
		uglify=none \
		out=./build/tmp.js
	./node_modules/.bin/uglifyjs \
		--beautify \
		--no-copyright \
		--no-dead-code \
		--no-mangle \
		--no-squeeze \
		< build/tmp.js \
		> build/sassolite.js

build/sassolite.min.js: build/parser.js
	./node_modules/.bin/r.js -o build/vanilla/config.js \
		name=../node_modules/almond/almond \
		include=./sassolite \
		uglify=none \
		out=./build/tmp.js
	./node_modules/.bin/uglifyjs \
		< build/tmp.js \
		> build/sassolite.min.js

clean:
	rm -f build/*.jison
	rm -f build/*.js

node_modules:
	npm install

test: test/unit test/cli test/sass test/build

test/build: build/sassolite.js build/sassolite.min.js
	./node_modules/.bin/mocha-phantomjs test/build/vanilla.html
	./node_modules/.bin/mocha-phantomjs test/build/minified.html
	./node_modules/.bin/mocha --ui tdd test/build/npm.js

test/cli: node_modules
	./node_modules/.bin/cucumber-js test/cli

test/sass: node_modules build/parser.js
	./node_modules/.bin/mocha --ui tdd test/sass/index.js

test/sass/%.css: node_modules
	./node_modules/.bin/node-sass --stdout test/sass/$*.scss > test/sass/$*.css

test/unit: node_modules build/parser.js
	./node_modules/.bin/mocha -r test/unit/index.js test/unit/*.js

.PHONY: \
	clean \
	fixtures \
	test \
	test/build \
	test/cli \
	test/sass \
	test/unit
