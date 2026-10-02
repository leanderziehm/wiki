main:
	node sidebars_generator.mjs && npm start

b: 
	node sidebars_generator.mjs && npm run build && npm run serve
start:
	npm start

gen:
	node sidebars_generator.mjs

