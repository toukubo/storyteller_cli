class Attr{
    find(id){
        const object_file_path = Conventions.ATTR_BASE +  + "/" + id + ".json"
        let attrObject = require(object_file_path)
        return attrObject
  
    }
    load(){
        var attr_file_path = Conventions.NOUN_BASE + this.name + ".json"
        attr = require(attr_file_path)
        this.type = attr.type
        this.name = attr.name
        this.noun = attr.noun

    }
}
module.exports = new Attr()
