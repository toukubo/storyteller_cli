class Sentence {
    constructor() {
        this.sentenceDao = require('../daos/sentence_dao.js')
    }

    instantiate(jsonObject){
        return sentence    
    }
    findByObjects(actor,verb,first_objective,secound_objective){
        this.actor = actor
        this.verb = verb
        this.first_objective = first_objective
        this.secound_objective = secound_objective
        return this
    }
    create(req) {

        this.jsonObject = {}
        this.jsonObject.actor = req.params.actor_name
        this.jsonObject.verb = req.params.verb_name
        this.jsonObject.noun = req.params.noun_name
        this.jsonObject.sentence_string = req.params.actor_name + " " + req.params.verb_name + " " + req.params.noun_name

        const nounDao = require('../daos/sentence_dao.js')
        var nounJson = nounDao.findByName(this.jsonObject.noun)
        // this.noun = 
        this.sentenceDao.save(this.jsonObject)
        return this
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