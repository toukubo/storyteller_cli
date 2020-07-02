const { findById } = require('./framework_dao.js');
const { domain } = require('process');

class TemplateDao {

    loadText(framework_name, template_name) {
        const file_path = process.cwd() + '/frameworks/' + framework_name + '/' + template_name
        if (fs.existsSync(file_path)) {

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

    ofASentence(sentence_id) {

        const Verbs = require('./verb_dao.js')
        const Frameworks = require('./framework_dao.js')
        const Sentences = require('./sentence_dao.js')
        const sentence = Sentences.findById(sentence_id)

        const verb = Verbs.findByName(sentence.verb)

        var frameworks = Frameworks.ofANoun(sentence.objective)

        if (frameworks.length === 0 && sentence.project !== undefined) {
            frameworks = Frameworks.ofTheProject(sentence.project[0])
        }
        const filteredTemplates = this.ofAVerbAndFrameworks(verb.id, frameworks)

        return filteredTemplates
    }

    ofAVerbAndFrameworks(verb_id, frameworks) {
        let templates_of_a_verb = this.ofAVerb(verb_id)
        return templates_of_a_verb.filter(function (template) {
            var i = 0;
            const frameworks_of_the_template = frameworks.filter(function (framework) {
                return framework.id === template.framework[0]
            })
            return frameworks_of_the_template.length > 0
        })
    }
    ofAVerb(verb_id) {
        return this.loadAll().filter(template => template.verb[0] === verb_id)
    }

    ofATag(tag) {
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
                var templateJsonObject = require(process.cwd() + '/rest/templates/' + File)
                const Frameworks = require('../daos/framework_dao.js')
                const framework_of_the_template = Frameworks.findById(templateJsonObject.framework)

                templateJsonObject.code = this.loadText(framework_of_the_template.id_string, templateJsonObject.name)
                if (templateJsonObject.code !== null) {
                    templates.push(templateJsonObject)
                }
            }

        });
        return templates
    }

}
module.exports = new TemplateDao()