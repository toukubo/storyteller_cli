module.exports = function (req) {
    console.debug(req)

    const Sentences = require('../daos/sentence_dao.js')
    const SentenceClass = require('../models/sentence.js')
    let sentence = SentenceClass.instantiate(Sentences.findBySentenceName(SentenceClass.toSentenceString(req.params.actor_name,req.params.verb_name,req.params.first_objective_name)))

    req.params.sentence = sentence.id
    var Generation = require('../models/generation.js')
    let generation = new Generation()
    generation.create(sentence)
    if(req.file){
        generation.placement()

    }else{
        generation.print()
    }
}