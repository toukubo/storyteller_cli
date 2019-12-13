module.exports = function (req) {

    if(req.params.id !== undefined){
        //@TODO StoryDao.findById(req.params.id) 
    }
    const sentenceDao = require('../daos/sentence_dao.js')
    let sentences =  sentenceDao.loadAll()

    sentences.forEach(sentence => {
        req.params.verb_name = sentence.verb
        req.params.actor_name = sentence.actor
        req.params.first_objective_name = sentence.objective
        require('./sentence.generate.js')(req)
    });
}