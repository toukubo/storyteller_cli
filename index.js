#!/usr/bin/env node
console.log(require)
const minimist = require('minimist')
require('./setup_path.js')

console.log(STORYTELLER_BASE)
console.log(VERB_BASE)

const args = minimist(process.argv.slice(2))

console.log(args)




mustache = require('mustache')

var models = {
  title: "Joe",
  calc: function () {
    return 2 + 4;
  }
};

template = "{{title}} spendsssss {{calc}}"
var output = mustache.render(template, models);

console.log(output)