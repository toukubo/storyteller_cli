#!/usr/bin/env node

require('../models/verb.js')
require('../models/noun.js')

template = verb.template(LAYER);
var sentence = {}

output = verb.interpret(template,noun)

console.clear();
process.stdout.write(output);


