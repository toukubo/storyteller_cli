
class Verb{

    template(layer){
        layer = layer === undefined?"all":layer
        this.framework = Stack[layer]
        let verb_file_path = Conventions.VERB_BASE +"/"+ this.framework + "/" + this.name
        let template = fs.readFileSync(verb_file_path, 'utf-8');
        return template
    }
    templates(){

    }
    interpret(hay,noun){
        console.log("this.framework : ")
        console.dir(this.framework)
    
    
        var interpreters = []
    
        // get the default interpreter 
        // @todo refator file out
        var defaultInterpreter = {}
        defaultInterpreter._interpret = function(hay,noun){
            return mustache.render(hay, noun);
        };
    
        interpreters.push(defaultInterpreter)
    
        // layer ( framework ) interpreters ( could be N ? )
        var interpreter_file_path = process.cwd()+"/verbs/"+this.framework+"/"+"interpreter.js"    
        var layerInterpreter   =     require(interpreter_file_path)
        interpreters.push(layerInterpreter)
    
        interpreters.forEach(function(interpreter){
            hay =  interpreter._interpret(hay,noun)
        })
        return hay
    }
    // module.exports =  interpret
 }
module.exports = new Verb()