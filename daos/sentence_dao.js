class SentenceDao {
    findById() {
        return jsonObject
    }
    findByName(name) {
        var sentenceJson = require(process.cwd() + '/sentences/' + name + '.json');
        return sentenceJson
    }
    save() {

    }
    loadAll() {
        var fs = require('fs');
        var sentences = []
        var sentencesFiles = fs.readdirSync(process.cwd() + '/sentences/');
        sentencesFiles.forEach(sentenceFile => {
            if (sentenceFile.endsWith(".json")) {
                var sentenceJsonObject = require(process.cwd() + '/sentences/' + sentenceFile)
                sentences.push(sentenceJsonObject)
            }
        });
        return sentences
    }
    // of(){
    //     const {{name}} = []

    // }
    // # file data 
    function () {
        verb_file_path = VERB_BASE + RESTBASE + "/" + this.name
        template = fs.readFileSync(verb_file_path, 'utf-8');
        return template
    }

}
module.exports = new SentenceDao()