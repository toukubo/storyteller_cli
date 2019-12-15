class TemplateDao {
    loadText(layer,verb) {
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