#!/usr/bin/env node

require('./stacking.js')
require('./verb.js')
require('./noun.js')
require('./sentence.js')
require('./setup_path.js')
require('./parse.js')
require('./sentence_logic.js')
output = require('./render.js')()
require('./output.js')


function render(){
    return mustache.render(template, model);
}
