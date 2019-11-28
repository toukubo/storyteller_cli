#!/usr/bin/env node

require('./stacking.js')
require('./setup_path.js')
require('./verb.js')
require('./noun.js')
require('./parse.js')

console.dir(LAYER)

template = verb.template(LAYER);
// noun = loadNoun(noun)
var sentence = {}

// let interpret = require('./interpreter.js')


output = verb.interpret(template,noun)

console.log(output)

