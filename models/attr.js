class Attr {
    constructor() {    }
    capitalize(str) {
        if (!str || typeof str !== 'string') return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    instantiate(json){
        var attr = {}
        attr.name = json.name
        attr.type = json.type
        attr.upper = this.capitalize(attr.name)
        return attr
    }
}
module.exports=new Attr()