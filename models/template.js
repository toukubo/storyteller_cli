class Template {
    constructor() {
        this.templateDao = require('../daos/template_dao.js')
    }



    instantiate(json) {

        var template = new Template()

        template.json = json

        template.framework = template.json.framework[0]
        // frameworkDao
        template.file_path = template.json.file_path
        template.verb = template.json.verb[0]
        template.layer = json.layer[0]
        template.text = this.templateDao.loadText(json.framework.name)

        return template

    }

    create(req) {}

    findByVerbAndFrameworkAndLayer(verb, framework,layer) {

        var json = this.templateDao.findByVerbAndFramework(verb, framework)
        return this.instantiate(json)
    }

    findByVerbAndFramework(verb, framework) {

        var json = this.templateDao.findByVerbAndFramework(verb, framework)
        return this.instantiate(json)
    }

    instantiate(templatesJson){
        // let templateClass = new Template()
        return this.templatesJson.map(function(templateJson){
            return instantiate(templateJson)
        });
    }
    loadAll() {
        return instantiate ( this.templateDao.loadAll())
    }
}
module.exports = new Template()