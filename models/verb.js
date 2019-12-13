class Verb {
    constructor(){}
    instantiate(name,layer){
        layer = layer === undefined ? "all" : layer
        this.framework = Stack[layer]
        this.name=name
        return this
    }

    template(layer) {
        let verb_file_path = Conventions.VERB_BASE + "/" + this.framework + "/" + this.name
        let template = fs.readFileSync(verb_file_path, 'utf-8');
        return template
    }
    templates() {

    }
    saveTemplate(){
        console.log(this.template)
    }
 }
 module.exports=new Verb()