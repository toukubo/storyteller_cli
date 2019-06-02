#!/usr/bin/env node
console.log(require)
const minimist = require('minimist')
require('./setup_path.js')


const args = minimist(process.argv.slice(2))

console.log(args)


