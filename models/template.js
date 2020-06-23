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


    loadAll() {
        this.templatesJson = this.templateDao.loadAll()

        var templates = []
        let templateClass = new Template()

        this.templatesJson.forEach(templateJson => {

            let template = templateClass.instantiate(templateJson)
            templates.push(template)
        });
        return templates
    }
}
module.exports = new Template()