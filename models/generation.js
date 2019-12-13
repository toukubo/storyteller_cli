module.exports = class Generation {
    constructor() {
        this.generationDao = require('../daos/generation_dao.js')
    }
    create(req) {
        this.jsonObject = {}
        this.jsonObject.sentence = req.params.sentence_id
        this.generationDao.save(this.jsonObject)
        return this.interpret()
    }
    update(id) {

    }
    delete(id) {

    }
    loadById(id) {

    }
    get(id) {
        this.jsonObject = this.generationDao.findById(id)
    }

    interpret(sentence, layer) {

        // let verb = require('../models/verb.js')
        // let verb = verb.instantiate(sentence.verb, layer)
        // let Noun = require('../models/noun.js')
        // let noun = new Noun(sentence.noun)
        // noun.load()
        var hay = sentence.verb.template(LAYER)
        var interpreters = []

        // get the default interpreter 
        // @todo refator this, file it out
        var defaultInterpreter = {}
        defaultInterpreter._interpret = function (hay, noun) {
            return mustache.render(hay, noun);
        };
        interpreters.push(defaultInterpreter)
        var interpreter_file_path = process.cwd() + "/verbs/" + sentence.verb.framework + "/" + "interpreter.js"
        var layerInterpreter = require(interpreter_file_path)
        interpreters.push(layerInterpreter)
        interpreters.forEach(function (interpreter) {
            hay = interpreter._interpret(hay, sentence.first_objective)
        })
        return hay
    }
}