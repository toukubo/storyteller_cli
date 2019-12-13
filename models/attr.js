class Attr {
    constructor() {    }
    capitalize(str) {
        if (!str || typeof str !== 'string') return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    instantiate(json){
        var attr = new Attr()
        attr.name = json.name
        attr.type = json.type
        attr.upper = this.capitalize(attr.name)
        return attr
    }
    setNoun(noun){
        this.noun_name = noun.name
        this.noun_lower = noun.lower
    }
}    
module.exports=new Attr()