module.exports = function (req) {


    if (req.params.id !== undefined) {
        //@TODO StoryDao.findById(req.params.id) 
    }
    const sentenceDao = require('../daos/sentence_dao.js')
    let sentences = sentenceDao.loadAll()
    const Sentence = require('../models/sentence.js')

    sentences.forEach(sentence => {
        // console.log("sentence : ")
        // console.dir(sentence.story)


        if (sentence.story && sentence.story[0] == req.story) {

            req.params.verb_name = sentence.verb
            req.params.actor_name = sentence.actor
            req.params.first_objective_name = sentence.objective
            req.sentence_string = Sentence.toSentenceString(sentence.actor,sentence.verb,sentence.objective)
            req.external=true

            
            require('./sentence.generate.js')(req)
        }

    });
}