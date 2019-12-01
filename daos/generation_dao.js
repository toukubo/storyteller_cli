
class GenerationDao{
    load(){

    }
    findById(){

    }
    save(){
        
    }

    of(){
        const generation = []

    }
    // # file data 
    function(){
        verb_file_path = VERB_BASE + RESTBASE + "/" + this.name
        template = fs.readFileSync(verb_file_path, 'utf-8');
        return template
    }

}
module.exports = new GenerationDao()