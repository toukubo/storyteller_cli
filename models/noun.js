module.exports=class Noun{
    constructor(name){
        this.nounDao = require('../daos/noun_dao.js')

        this.name=name
    }
    load(){
        this.nounObject = this.nounDao.findByName(this.name)
        

        this.name=this.nounObject.name
        this.lower=this.nounObject.name.toLowerCase()
        this.attrsJson = this.nounObject.attrs
        this.attrs = []
        const Attr = require('./attr.js')
        // this is for mustach nested models. to reference to the parent model attributes
        this.attrsJson.forEach(attrJson => {
            var attr = new Attr(attrJson)


            attr.noun_name = this.name 
            attr.noun_lower = this.lower
            this.attrs.push(attr)
        });
    }
    loadAll(){

    }
}
