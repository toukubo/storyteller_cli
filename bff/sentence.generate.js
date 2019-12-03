module.exports = function (req) {
    var Generation = require('../models/generation.js')
    let generation = new Generation()
    var sentenceObject = {}
    sentenceObject.verb = req.params.verb_name
    sentenceObject.noun = req.params.noun_name
    output = generation.interpret(sentenceObject, LAYER)
    process.stdout.write(output);
}