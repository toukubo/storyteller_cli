args = require('minimist')(process.argv.slice(2))
layer = args.layer

verb = require('./verb.js')

verb.name = args._[0]

noun = require('./noun.js')
noun.name = (args._[1])
noun.load()
