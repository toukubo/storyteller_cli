class Verb {
    constructor() {
        this.verbDao = require('../daos/verb_dao.js')
    }
    instantiate(json){
        var verb = new Verb()
        this.name=json.name
        this.id=json.id
        return this
    }
    templates(framework){
        var returned = []
        framework.layers.forEach(layer => {
            returned.push(this.template(framework,layer))
        });
        return returned
    }

    template(framework,layer) {
        // @TODO for retrieving 
        var template = require('../models/template.js')
        template.findByVerbAndFramework(this, framework)
        let file_path = Conventions.VERB_BASE + "/" + framework.name + "/"+layer.name+ "/" + this.name
        template.text = fs.readFileSync(file_path, 'utf-8');
        return template
    }
    saveTemplateText(){
        console.log(this.template.text)
    }
    findById(id) {
        
        var json = this.verbDao.findById(id)
        return this.instantiate(json)
    }
    findByName(name) {
        
        var json = this.verbDao.findByName(name)
        return this.instantiate(json)
    }
 }
 module.exports=new Verb()