
var req = {}

let commandFullPath  = process.argv[1]

var fileNameIndex = commandFullPath.lastIndexOf("/") + 1;
req.command = commandFullPath.substr(fileNameIndex);

args = require('minimist')(process.argv.slice(2))

if(process.execArgv[0]==="--debug"){

    let application_path = process.argv[1]
    let path = require('path')
    let application_dir = path.dirname(application_path)
    var args_text = fs.readFileSync(application_dir+'/.debug', 'utf-8')
    var args_splited = args_text.split(" ")
    req.command = args_splited.shift()
    // var new_args =  args_splited.filter(n,index => index !== 0)
    args_text = args_splited.join(' ')

    args = require('minimist')(args_splited)
}

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
    req.sentence_string=args._.join(' ')

}
if(req.command === 'story'||req.command === 'storyteller'){
    if(args._[0]==='tell'){
        req.operation = 'generate'
        req.command = 'story'
    }
}


req.bff=req.operation=='generate'


module.exports = req
