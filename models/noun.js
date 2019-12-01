module.exports=class Noun{
    constructor(name){
        this.name=name
    }
    loadByName(name){

    }
    load(){
        var noun_file_path = Conventions.NOUN_BASE + this.name + ".json"

        this.nounObject = {}
        this.nounObject.noun = require(noun_file_path)

        this.name=this.nounObject.noun.name
        this.attrs = this.nounObject.noun.attrs

        // this.attr_ids = noun.attrs
        // this.loadAttrs()
    }
    loadAttrs(){
        // let attr = require('./attr.js')
        // let attrs = []
        // this.attr_ids.forEach(function(attr_id){
        //     attrObject = attr.find(attr_id)
        //     attrs.push(attrObject)
        // })


        // this.nounObject.attrs=attrs;
    }
}
