module.exports=class Verb {
    constructor(name,layer){
        this.jsonObject = {}
        this.jsonObject.name = name
        
        layer = layer === undefined ? "all" : layer
        this.jsonObject.framework = Stack[layer]

        // this.load()
    }
    load(){

    }

    template(layer) {
        let verb_file_path = Conventions.VERB_BASE + "/" + this.jsonObject.framework + "/" + this.jsonObject.name
        let template = fs.readFileSync(verb_file_path, 'utf-8');
        return template
    }
    templates() {

    }

 }
