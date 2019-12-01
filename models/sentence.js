#!/usr/bin/env node
require('./stacking.js')
require('./setup_path.js')
require('./verb.js')
require('./noun.js')
require('./parse.js')

template = verb.template(LAYER);
var sentence = {}

output = verb.interpret(template,noun)

console.clear();
process.stdout.write(output);


