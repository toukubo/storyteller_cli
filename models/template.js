class Template {
    constructor() {
        this.templateDao = require('../daos/template_dao.js')
    }
    find(sentence) {
        var templates = this.loadAll()
        const filtered = []
        templates.forEach(template => {
//             console.log("template : ")
// console.dir(template)
// console.log("sentence : ")
// console.dir(sentence)

            if (sentence.verb.id === template.verb) {
                sentence.layers.forEach(layer => {
                    if (template.layer === layer) {
                        filtered.push(template)
                    }
                });
            }
        });
        console.log("filtered : ")
        console.dir(filtered)

        return filtered
    }


    instantiate(json) {
        var template = new Template()

        template.json = json

        template.framework = template.json.framework[0]
        template.file_path = template.json.file_path
        template.verb = template.json.verb[0]
        template.layer = json.layer[0]
        template.text = this.templateDao.loadText(template.layer,template.verb)

        return template

    }

    create(req) {}


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