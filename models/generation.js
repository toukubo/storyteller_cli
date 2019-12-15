module.exports = class Generation {
    constructor() {
        this.generationDao = require('../daos/generation_dao.js')
    }
    create(req) {
        this.jsonObject = {}
        this.jsonObject.sentence = req.params.sentence
        console.log("req.params.sentence : ")
console.dir(req.params.sentence)


        var sentence = require('./sentence.js')
        this.sentence = sentence.findById(this.jsonObject.sentence)
        console.log("this.sentence : ")
console.dir(this.sentence)


        this.templates = this.sentence.templates()


        this.interpretAllTemplates()

        // this.jsonObject.generatedText = this.generatedText
        // this.jsonObject.file_path = this.file_path
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
        this.templates.forEach(template => {
            this.interpret(template)
        });
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
        var interpreter_file_path = process.cwd() + "/verbs/" + this.sentence.verb.framework + "/" + "interpreter.js"
        var layerInterpreter = require(interpreter_file_path)
        interpreters.push(layerInterpreter)
        var sentence = this.sentence
        interpreters.forEach(function (interpreter) {
            hay = interpreter._interpret(hay, sentence.first_objective)
            file_path = interpreter._interpret(file_path, sentence.first_objective)
        })
        template.generatedText = hay
        template.generated_file_path = file_path
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