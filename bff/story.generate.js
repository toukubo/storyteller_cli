module.exports = function (req) {
    // console.log('story.generate called!!!!!!!!!!!!!!!')
    const sentencesDao = require('../daos/sentence_dao.js')
    let sentences =  sentencesDao.loadAll()

    sentences.forEach(sentence => {
        req.params.verb_name = sentence.verb
        req.params.noun_name = sentence.objective
        require('./sentence.generate.js')(req)
    });
}