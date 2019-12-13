module.exports = function (req) {
    var Generation = require('../models/generation.js')
    let generation = new Generation()

    let noun = require('../models/noun.js')
    var actor = noun.findByName(req.params.actor_name)
    
    let verb = require('../models/verb.js')
    verb = verb.instantiate(req.params.verb_name,LAYER)
    let first_objective = noun.findByName(req.params.first_objective_name)

    var sentence = require('../models/sentence.js')
    sentence = sentence.findByObjects(actor,verb,first_objective)

    output = generation.interpret(sentence, LAYER)
    console.log(output);
}