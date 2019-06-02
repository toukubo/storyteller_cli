
class Verb{

    
    template(){
        verb_file_path = VERB_BASE + RESTBASE + "/" + this.name
        template = fs.readFileSync(verb_file_path, 'utf-8');
        return template
    }
    loadFile(){

    }
}
module.exports = new Verb()