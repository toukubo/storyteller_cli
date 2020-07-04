module.exports = class Generation {
    constructor() {
        this.generationDao = require('../daos/generation_dao.js')
    }
    create(sentence) {
        this.sentence = sentence

        const Templates = require('../daos/template_dao.js')
        const TemplateClass = require('./template.js')
        this.templates = TemplateClass.instantiateAll(Templates.ofASentence(sentence.id))

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
        return generateds.length>0?generateds:null
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
            if(hay!==undefined){
                return mustache.render(hay, noun);
            }
            return ""
        };
        interpreters.push(defaultInterpreter)
        var frameworkClass = require('./framework.js')
        let framework = frameworkClass.findById(template.framework)


        var interpreter_file_path = process.cwd() + "/frameworks/" + framework.json.id_string + "/" + "interpreter.js"
        if (fs.existsSync(interpreter_file_path)) {
            var layerInterpreter = require(interpreter_file_path)
            interpreters.push(layerInterpreter)
        }
        var sentence = this.sentence

        interpreters.forEach(function (interpreter) {
            hay = interpreter._interpret(hay, sentence.first_objective)
            file_path = interpreter._interpret(file_path, sentence.first_objective)
        })
        var generated = {}
        generated.code  = hay
        generated.template = template
        generated.file_path = file_path
        return generated
    }
    print(){
        if(this.generateds!==null){
            this.generateds.forEach(generated => {
                console.info(generated.code)
            });
        }
    }
    
    placement(){

        var placement = require('./placement.js')
        placement.generation = this // no. @TODO the placement should load the placement.  and generation should record all the info through dao
        placement.create(req)
            // placement.()
    }

}