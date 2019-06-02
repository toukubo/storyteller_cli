class Noun{
    load(){
        var noun_file_path = NOUN_BASE + this.name + ".json"
        noun = require(noun_file_path)
        this.type = noun.type
        this.attrs = noun.attrs
    }
}
module.exports = new Noun()