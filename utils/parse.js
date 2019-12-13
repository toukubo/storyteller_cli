
var req = {}

let commandFullPath  = process.argv[1]
var fileNameIndex = commandFullPath.lastIndexOf("/") + 1;
req.command = commandFullPath.substr(fileNameIndex);

args = require('minimist')(process.argv.slice(2))
// console.log("args : ")
// console.dir(args)


LAYER = args.layer != undefined?args.layer:LAYER

//set params following conventiosn, then custom parameter mapping
req.params  = require('./parameters.js')

req.bff = false
let operation  = "create"
operation = args.d?"delete":operation
operation = args.u?"update":operation
operation = args.r?"get":operation
operation = args.g?"generate":operation
req.operation = operation

req.file=args.f?true:false


if(req.command === 'sentence'){
    req.params['actor_name'] = args._[0]
    req.params['verb_name'] = args._[1]
    req.params['first_objective_name'] = args._[2]
}
if(req.command === 'story'||req.command === 'storyteller'){
    if(args._[0]==='tell'){
        req.operation = 'generate'
        req.command = 'story'
    }
}


req.bff=req.operation=='generate'


module.exports = req
