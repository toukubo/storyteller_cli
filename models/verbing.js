class Verbing {
    constructor() {
        this.verbingDao = require('../daos/verbing_dao.js')
    }



    create(req) {

        this.hay = req.params.hay
        if (this.hay === undefined) {
            const clipboardy = require('clipboardy');
            this.hay = clipboardy.readSync();


        }
        var noun = require('./noun.js')
        this.nouns = noun.loadAll()
        // console.log(Object.values(this.nouns))
        var regexes = {}

        this.nouns.forEach(noun => {
            regexes[noun.name] = "{{name}}"
            regexes[noun.lower] = "{{lower}}"
            noun.attrs.forEach(attr => {
                regexes[attr.name]= '{{name}}'
            });
        });
        Object.keys(regexes).forEach(regexKey => {
 
            var replaced = regexes[regexKey];
            var regex = new RegExp(regexKey,'g')
            this.hay = this.hay.replace(regex, replaced)
            
        });

        // the determination on the verb thing ? 
        var verb = require('./verb.js')
        verb = verb.instantiate(req.verb_name, req.layer)
        verb.template = this.hay
        verb.saveTemplate()
        // developer was there 

        // this.verbingDao.save(this.jsonObject)
    }
    update(id) {

    }
    delete(id) {


    }
    show(id) {
        this.jsonObject = this.VerbingDao.findById(id)
        console.stdout.write(this.jsonObject)
    }
}
module.exports = new Verbing()