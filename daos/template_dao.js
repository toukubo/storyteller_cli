const { findById } = require('./framework_dao.js')

class TemplateDao {
    loadText(layer, verb) {
        // @TODO for retrieving 
        var template = require('../models/template.js')
        var layerDao = require('../daos/layer_dao.js')
        var verbDao = require('../daos/verb_dao.js')
        var verbJson = verbDao.findById(verb)
        var layerJson = layerDao.findById(layer)
        let file_path = process.cwd() + '/templates/' + layerJson.name + "/" + verbJson.name
        var text = fs.readFileSync(file_path, 'utf-8');
        return text
    }
    loadText(framework_name, template_name) {
        const file_path = process.cwd() + '/templates/' + framework_name + '/' + template_name
        if (fs.existsSync(file_path)) {
            console.debug(file_path)
            console.debug(": is file_path")

            const text = fs.readFileSync(file_path, 'utf-8');
            return text
        }
        return null
    }
    findByIds(ids) {
        json_array = []
        ids.forEach(id => {
            json_array.push(findById(id))
        });
        return ids
    }

    of(sentence) {
        const verbDao = require('./verb_dao.js')
        const frameworkDao = require('./framework_dao.js')

        const verb = verbDao.findById(sentence.verb)
        const frameworks = frameworkDao.of(sentence.noun)

        const layers = layer

        const filtered = of(verb, frameworks, layers)
        return filtered
    }




    of(verb, frameworks, layers) {
        var templates = this.loadAll()
        templates.filter()
        var found = {}
        templates.forEach(template => {
            if (template.verb === verb && template.framework === framework.id) {
                found = template
            }
        });
        return found
    }


    findByVerbAndFramework(verb, framework) {
        // var verbDao = require('./verb_dao.js')
        // let verbJson = verbDao.findById(verb)
        // var frameworkDao = require('./framework_dao.js')
        // let frameworkJson = frameworkDao.findById() 
        var templates = this.loadAll()
        var found = {}
        templates.forEach(template => {
            if (template.verb === verb && template.framework === framework.id) {
                found = template
            }
        });
        return found
    }
    findByVerb(tag) {
        var file_path = process.cwd() + "/templates/" + tag + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByParent(parent) {
        var file_path = process.cwd() + "/templates/" + parent + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByIncluded(included) {
        var file_path = process.cwd() + "/templates/" + included + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByOfficial(official) {
        var file_path = process.cwd() + "/templates/" + official + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }

    findByTag(Tag) {
        templates = this.loadAll()
        var found = {}
        templates.forEach(template => {
            if (template.tag === tag) {
                found = template
            }
        });
        return found
    }
    findByParent(Parent) {
        templates = this.loadAll()
        var found = {}
        templates.forEach(template => {
            if (template.parent === parent) {
                found = template
            }
        });
        return found
    }
    findByIncluded(Included) {
        templates = this.loadAll()
        var found = {}
        templates.forEach(template => {
            if (template.included === included) {
                found = template
            }
        });
        return found
    }
    findByOfficial(Official) {
        templates = this.loadAll()
        var found = {}
        templates.forEach(template => {
            if (template.official === official) {
                found = template
            }
        });
        return found
    }

    loadAll() {
        var fs = require('fs');
        var templates = []
        var templatesFiles = fs.readdirSync(process.cwd() + '/rest/templates/');

        templatesFiles.forEach(File => {
            if (File.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/rest/templates/' + File)
                templates.push(jsonObject)
            }

        });
        return templates
    }

}
module.exports = new TemplateDao()