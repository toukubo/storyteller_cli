class Noun {
    constructor() {
        this.nounDao = require('../daos/noun_dao.js')
    }

    instantiate(json) {
        var noun = new Noun()

        noun.json = json

        noun.name = noun.json.name
        noun.lower = noun.json.name.toLowerCase()
        noun.attrsJson = noun.json.attrs
        noun.attrs = []

        const Attr = require('./attr.js')
        // this is for mustach nested models. to reference to the parent model attributes
        noun.attrsJson.forEach(attrJson => {
            var attr = Attr.instantiate(attrJson)
            attr.noun_name = noun.name
            attr.noun_lower = noun.lower
            noun.attrs.push(attr)
        });

        return noun

    }
    findByName(name) {
        
        var json = this.nounDao.findByName(name)
        return this.instantiate(json)
    }
    load() {



    }
    loadAll() {
        this.nounsJson = this.nounDao.loadAll()

        var nouns = []
        var NounClass = new Noun()

        this.nounsJson.forEach(nounJson => {
            
            let noun = NounClass.instantiate(nounJson)
            nouns.push(noun)
        });
        return nouns
    }
}
module.exports = new Noun()