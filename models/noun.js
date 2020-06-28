class Noun {
    constructor() {
        this.nounDao = require('../daos/noun_dao.js')
    }

    instantiate(json) {
        var noun = new Noun()

        noun.json = json
        console.debug(noun.json)
console.debug(": is noun.json")


        noun.name = noun.json.name
        noun.lower = noun.json.name.toLowerCase()
        noun.attrsJson = noun.json.attrs
        noun.attrs = []

        const Attr = require('./attr.js')
        // this is for mustach nested models. to reference to the parent model attributes
        noun.attrsJson.forEach(attrJson => {
            var attr = Attr.instantiate(attrJson)
            attr.setNoun(noun)
            noun.attrs.push(attr)
        });

        return noun

    }
    findByName(name) {
        
        var json = this.nounDao.findByName(name)
        return this.instantiate(json)
    }
    findById(id) {
        
        var json = this.nounDao.findById(id)
        return this.instantiate(json)
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