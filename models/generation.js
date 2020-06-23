module.exports = class Generation {
    constructor() {
        this.generationDao = require('../daos/generation_dao.js')
    }
    create(req) {
        this.jsonObject = {}
        this.jsonObject.sentence = req.params.sentence

        var sentence = require('./sentence.js')
        this.sentence = sentence.findById(this.jsonObject.sentence)
        this.templates = this.sentence.templates()
        this.generateds = this.interpretAllTemplates()


        this.generationDao.save(this.jsonObject)
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
    interpretAllTemplates(){
        var generateds = []
        this.templates.forEach(template => {
            var generated = this.interpret(template)
            generated.sentence = this.sentence
            generateds.push(generated)
        });
        return generateds
    }

    interpret(template) {

        // var hay = this.sentence.verb.template.text(LAYER)
        var hay = template.text
        var interpreters = []

        var file_path = template.file_path

        // get the default interpreter 
        // @todo refator this, file it out
        var defaultInterpreter = {}
        defaultInterpreter._interpret = function (hay, noun) {
            return mustache.render(hay, noun);
        };
        interpreters.push(defaultInterpreter)
        var frameworkClass = require('./framework.js')
        let framework = frameworkClass.findById(template.framework)

        var interpreter_file_path = process.cwd() + "/verbs/" + framework.name + "/" + "interpreter.js"
        var layerInterpreter = require(interpreter_file_path)
        interpreters.push(layerInterpreter)
        var sentence = this.sentence


        interpreters.forEach(function (interpreter) {
            hay = interpreter._interpret(hay, sentence.first_objective)
            file_path = interpreter._interpret(file_path, sentence.first_objective)
        })
        var generated = {}
        generated.text  = hay
        generated.template = template
        generated.file_path = file_path
        return generated
    }
    print(){
        this.generated.forEach(generated => {
            console.log(generated.generatedText)
            
        });
    }74
    
    placement(){

        var placement = require('./placement.js')
        placement.generation = this // no. @TODO the placement should load the placement.  and generation should record all the info through dao
        placement.create(req)
            // placement.()
    }

}