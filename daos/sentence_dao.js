class SentenceDao{
    findById(){
        return jsonObject
    }
    findByName(){

    }
    save(){
        
    }
    // of(){
    //     const {{name}} = []

    // }
    // # file data 
    function(){
        verb_file_path = VERB_BASE + RESTBASE + "/" + this.name
        template = fs.readFileSync(verb_file_path, 'utf-8');
        return template
    }

}
module.exports = new SentenceDao()