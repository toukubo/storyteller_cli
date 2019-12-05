module.exports =class Attr {
    constructor(jsonObject) {
        this.name = jsonObject.name
        this.type = jsonObject.type
        this.upper = this.capitalize(this.name)

    }
    capitalize(str) {
        if (!str || typeof str !== 'string') return str;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
}
