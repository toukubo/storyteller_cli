module.exports = function (req) {

    var sentence = require('../models/sentence.js')
    console.debug(req)
    sentence = sentence.findBySentenceName(sentence.toSentenceString(req.params.actor_name,req.params.verb_name,req.params.first_objective_name))

    req.params.sentence = sentence.id
    var Generation = require('../models/generation.js')
    let generation = new Generation()
    // generation.interpret(sentence, LAYER)
    generation.create(req)
    if(req.file){
        generation.placement()

    }else{
        generation.print()
    }
}