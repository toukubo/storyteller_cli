
var req = {}

let commandFullPath  = process.argv[1]
var fileNameIndex = commandFullPath.lastIndexOf("/") + 1;
req.command = commandFullPath.substr(fileNameIndex);

args = require('minimist')(process.argv.slice(2))
console.log("args : ")
console.dir(args)


LAYER = args.layer != undefined?args.layer:LAYER

//set parameters following conventiosn, then custom parameter mapping
req.parameters  = require('./parameters.js')

req.bff = false
let operation  = "create"
operation = args.d?"delete":operation
operation = args.u?"update":operation
operation = args.r?"get":operation
operation = args.g?"generate":operation
req.operation = operation



if(req.command === 'sentence'){
    req.parameters['verb_name'] = args._[0]
    req.parameters['noun_name'] = args._[1]
}
if(req.command === 'story'||req.command === 'storyteller'){
    if(args._[0]==='tell'){
        req.operation = 'generate'
    }
}


req.bff=req.operation=='generate'

console.log("req : ")
console.dir(req)


module.exports = req
