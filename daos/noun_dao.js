class NounFileDao{
    findByName(name){
        var file_path = process.cwd()+"/nouns/" +  name + ".json"
        this.jsonObject = {}
        let jsonObject = require(file_path)
        return jsonObject
    }
    findById(id){
        var file_path = process.cwd()+"/rest/nouns/" +  id + ".json"
        this.jsonObject = {}
        let jsonObject = require(file_path)
        return jsonObject
    }    
    loadAll() {
        var fs = require('fs');
        var nouns = []
        var nounFiles = fs.readdirSync(process.cwd() + '/nouns/');

        nounFiles.forEach(nounFile => {
            if (nounFile.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/nouns/' + nounFile)
                nouns.push(jsonObject)
            }
        });
        return nouns
    }
}
module.exports = new  NounFileDao()
