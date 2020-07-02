
if(args._[0] === 'sentence'){
    // console.log('mark 1 its sentence')
    VERB_NAME = args._[0]

    noun = require('../models/noun.js')
    noun.name = (args._[1])
    noun.load()
}
