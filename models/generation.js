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
        console.log("this.templates : ")
console.dir(this.templates)


        this.generated = this.interpretAllTemplates()
        console.log("the generation : ")
console.dir(this)

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
        var generated = []
        this.templates.forEach(template => {
            generated.push(this.interpret(template))
        });
        return generated
    }

    interpret(template) {

        // var hay = this.sentence.verb.template.text(LAYER)
        var hay = template.text
        var interpreters = []

        // template.text
        
        // var file_path = "models/{{lower}}.js"
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
        console.log("framework : ")
console.dir(framework)

        var interpreter_file_path = process.cwd() + "/verbs/" + framework.name + "/" + "interpreter.js"
        var layerInterpreter = require(interpreter_file_path)
        interpreters.push(layerInterpreter)
        var sentence = this.sentence
        console.log("sentence : ")
console.dir(sentence)

        interpreters.forEach(function (interpreter) {
            hay = interpreter._interpret(hay, sentence.first_objective)
            file_path = interpreter._interpret(file_path, sentence.first_objective)
        })
        template.generatedText = hay
        template.generated_file_path = file_path
        return template
    }
    print(){
        console.log(this.generatedText)
    }
    placement(){

        var placement = require('./placement.js')
        placement.generation = this // no. @TODO
        // 
        placement.create()
    }

}