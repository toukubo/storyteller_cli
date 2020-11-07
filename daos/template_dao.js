const { findById } = require('./framework_dao.js');
const { domain } = require('process');

class TemplateDao {

    loadText(framework_name, template_name, external) {

        let file_path = process.cwd() + '/frameworks/' + framework_name + '/' + template_name
        if (external) {
            file_path += ".external"
        } 
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

    ofASentence(sentence_id,external) {

        const Verbs = require('./verb_dao.js')
        const Frameworks = require('./framework_dao.js')
        const Sentences = require('./sentence_dao.js')
        const sentence = Sentences.findById(sentence_id)

        const verb = Verbs.findByName(sentence.verb)

        var frameworks = Frameworks.ofANoun(sentence.objective)


        if (frameworks.length === 0 && sentence.project !== undefined) {
            frameworks = Frameworks.ofTheProject(sentence.project[0])

        }

        const filteredTemplates = this.ofAVerbAndFrameworks(verb.id, frameworks,external)


        return filteredTemplates
    }

    ofAVerbAndFrameworks(verb_id, frameworks,external) {
        let templates_of_a_verb = this.ofAVerb(verb_id,external)

        return templates_of_a_verb.filter(function (template) {
            var i = 0;
            const frameworks_of_the_template = frameworks.filter(function (framework) {
                return framework.id === template.framework[0]
            })
            return frameworks_of_the_template.length > 0
        })
    }
    ofAVerb(verb_id,external) {
        return this.loadAll(external).filter(template => template.verb[0] === verb_id)
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

    loadAll(external) {
        var fs = require('fs');
        var templates = []
        var templatesFiles = fs.readdirSync(process.cwd() + '/rest/templates/');

        templatesFiles.forEach(File => {
            if (File.endsWith(".json")) {

                var templateJsonObject = require(process.cwd() + '/rest/templates/' + File)
                if (templateJsonObject.framework) {

                    const Frameworks = require('../daos/framework_dao.js')
                    const framework_of_the_template = Frameworks.findById(templateJsonObject.framework)

                    templateJsonObject.code = this.loadText(framework_of_the_template.id_string, templateJsonObject.name,external)
                    if (templateJsonObject.code !== null) {
                        templates.push(templateJsonObject)
                    }

                }
            }

        });
        return templates
    }

}
module.exports = new TemplateDao()