#!/usr/bin/env node
const minimist = require('minimist')
require('./setup_path.js')

// console.log(STORYTELLER_BASE)
// console.log(VERB_BASE)

module.exports = () => {
  const args = minimist(process.argv.slice(2))

}


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