module.exports = function (req) {

    var sentence = require('../models/sentence.js')
    sentence = sentence.findBySentenceName(sentence.toSentenceString(req.params.actor_name,req.params.verb_name,req.params.first_objective_name))
    var Generation = require('../models/generation.js')
    let generation = new Generation()
    output = generation.interpret(sentence, LAYER)
    console.log(output);
}