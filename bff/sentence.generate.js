module.exports = function (req) {

    const Sentences = require('../daos/sentence_dao.js')
    const SentenceClass = require('../models/sentence.js')
    let sentence = SentenceClass.instantiate(Sentences.findBySentenceName(req.sentence_string))

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