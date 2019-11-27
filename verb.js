
class Verb{

    template(layer){
        console.log("layer mark 1 : ")
console.dir(layer)

        layer = layer === undefined?"all":layer
        console.log("layer : ")
        console.dir(layer)
        console.log("Stack : ")
        console.dir(Stack)


        let framework = Stack[layer]
        console.log("framework : ")
        console.dir(framework)

        let verb_file_path = Conventions.VERB_BASE +"/"+ framework + "/" + this.name
        let template = fs.readFileSync(verb_file_path, 'utf-8');
        return template
    }
    templates(){

    }
 }
module.exports = new Verb()