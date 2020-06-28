class Sentence {
    constructor() {
        this.sentenceDao = require('../daos/sentence_dao.js')
    }
    findById(id) {
        var sentenceJson = this.sentenceDao.findById(id)
        var sentence = this.instantiate(sentenceJson)
        return sentence
    }
    templates() {
        var Templates = require('../daos/template_dao.js')
        return Templates.of(this.json.id)
    }

instantiate(jsonObject) {
        var sentence = new Sentence()

        sentence.json = jsonObject


        let noun = require('../models/noun.js')
        sentence.actor = noun.findByName(jsonObject.actor)

        let verb = require('../models/verb.js')
        sentence.verb = verb.findByName(jsonObject.verb)

        let first_objective = noun.findByName(jsonObject.objective)
        sentence.first_objective = first_objective

        var project = require('./project.js')
        sentence.project = project.findById(jsonObject.project)

        sentence.layers = []

        var frameworkClass = require('./framework.js')
        if(sentence.layers === undefined || sentence.layers.length === 0){
            sentence.project.frameworks.forEach(frameworkJson => {
                var framework = frameworkClass.findById(frameworkJson)
                sentence.layers = sentence.layers.concat(framework.layers)
            });
            sentence.layers === sentence.project.layers
        }

        sentence.id = sentence.json.id

        return sentence
    }
    
    findByObjects(actor, verb, first_objective, secound_objective) {
        var sentence_string = this.toSentenceString(actor.name, verb.name, first_objective.name)

        var sentence = this.findBySentenceName(sentence_string)
        if (sentence === undefined) return null;

        // if the first objective has the attrs wigth it, 
        // then load the attrs of the sentence, 
        // and inject it to the sentence.first_objective


        if (sentence.attrs !== undefined) {
            // this.first_objective = 

        }

        // this.secound_objective = secound_objective
        return sentence
    }
    toSentenceString(actor, verb, first_objective, adjective) {
        var string = actor + " " + verb + " " + first_objective
        string = adjective !== undefined ? string + " " + adjective : string
        return string

    }
    create(req) {

        this.jsonObject = {}
        this.jsonObject.actor = req.params.actor_name
        this.jsonObject.verb = req.params.verb_name
        this.jsonObject.noun = req.params.noun_name
        this.jsonObject.sentence_string = this.toSentenceString(req.params.actor_name, req.params.verb_name, req.params.noun_name)

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