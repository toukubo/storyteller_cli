class Noun {
    constructor() {
        this.nounDao = require('../daos/noun_dao.js')
    }

    instantiate(json) {
        var noun = new Noun()

        noun.json = json

        noun.description = noun.json.description

        // this is for nested models. to reference to the description model nounibutes
        noun.descriptionsJson = noun.json.descriptions
        noun.descriptions = []
        noun.descriptionsJson.forEach(descriptionJson => {
            const Description = require('./description.js')
            var description = Description.instantiate(descriptionJson)
            description.setNoun(description)
            noun.descriptions.push(description)
        });
        noun.name = noun.json.name

        // this is for nested models. to reference to the name model nounibutes
        noun.namesJson = noun.json.names
        noun.names = []
        noun.namesJson.forEach(nameJson => {
            const Name = require('./name.js')
            var name = Name.instantiate(nameJson)
            name.setNoun(name)
            noun.names.push(name)
        });
        return noun

    }

    create(req){
        var description = require('../models/description.js')
        this.description = description.findById(this.jsonObject.description)
        var name = require('../models/name.js')
        this.name = name.findById(this.jsonObject.name)
    }


    findByDescription(description) {
        
        var json = this.NounDao.findByDescription(description)
        return this.instantiate(json)
    }
    findByName(name) {
        
        var json = this.NounDao.findByName(name)
        return this.instantiate(json)
    }

    loadAll() {
        this.nounsJson = this.nounDao.loadAll()

        var nouns = []
        let nounClass = new Noun()

        this.NounsJson.forEach(NounJson => {
            
            let noun = nounClass.instantiate(NounJson)
            nouns.push(noun)
        });
        return nouns
    }
}
module.exports = new Noun()