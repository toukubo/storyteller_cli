class Sentence {
    constructor() {
        this.sentenceDao = require('../daos/sentence_dao.js')
    }
    create(req) {
        // console.log("sentence.create called!!!!!!!!! : ")
        console.dir(req)

        this.jsonObject = {}
        this.jsonObject.actor = req.params.actor_name
        this.jsonObject.verb = req.params.verb_name
        this.jsonObject.noun = req.params.noun_name
        this.jsonObject.sentence_string = req.params.actor_name + " " + req.params.verb_name + " " + req.params.noun_name

        nounDao = require('../daos/sentence_dao.js')
        noun = nounDao.findByN


        this.sentenceDao.save(this.jsonObject)
        return this.jsonObject
    }
    update(id) {
        console.log("sentence.update called!!!!!!!!! : ")

    }
    delete(id) {


    }
    show(id) {
        this.jsonObject = this.sentenceDao.findById(id)
        // console.stdout.write(this.jsonObject)
    }
}
module.exports = new Sentence()