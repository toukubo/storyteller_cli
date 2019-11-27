#!/usr/bin/env node

require('./stacking.js')
require('./setup_path.js')
require('./verb.js')
require('./noun.js')
require('./parse.js')

console.log("env.layer mark 2 : ")
console.dir(LAYER)


template = verb.template(LAYER);
// noun = loadNoun(noun)
var sentence = {}

output = mustache.render(template, noun);
console.log(output)