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
        console.stdout.write(this.jsonObject)
    }

    interpret(sentenceObject, layer) {
        // console.log("sentenceObject : ")
        // console.dir(sentenceObject)

        let Verb = require('../models/verb.js')
        let verb = new Verb(sentenceObject.verb, layer)
        let Noun = require('../models/noun.js')
        let noun = new Noun(sentenceObject.noun)
        noun.load()
        var hay = {};

        hay = verb.template(LAYER)
        var interpreters = []

        // get the default interpreter 
        // @todo refator file out
        var defaultInterpreter = {}
        defaultInterpreter._interpret = function (hay, noun) {
            return mustache.render(hay, noun);
        };

        interpreters.push(defaultInterpreter)

        // layer ( framework ) interpreters ( could be N ? )
        var interpreter_file_path = process.cwd() + "/verbs/" + verb.jsonObject.framework + "/" + "interpreter.js"
        var layerInterpreter = require(interpreter_file_path)
        interpreters.push(layerInterpreter)

        interpreters.forEach(function (interpreter) {
            hay = interpreter._interpret(hay, noun)
        })
        return hay
    }
}