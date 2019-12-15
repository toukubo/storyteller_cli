
class VerbDao{
    findById(id){
        var file_path = process.cwd()+"/rest/verbs/" +  id + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
   
    findByName(name){
        var verbs = this.loadAll()
        var found = {}
        verbs.forEach(verb => {
            if( verb.name === name ){
                found = verb
            }
        });
        return found
    }
    findByRepository_name(Repository_name){
        verbs = this.loadAll()
        var found = {}
        verbs.forEach(verb => {
            if( verb.repository_name === repository_name ){
                found = verb
            }
        });
        return found
    }
    findByRepository_user_name(Repository_user_name){
        verbs = this.loadAll()
        var found = {}
        verbs.forEach(verb => {
            if( verb.repository_user_name === repository_user_name ){
                found = verb
            }
        });
        return found
    }
    
    loadAll() {
        var fs = require('fs');
        var verbs = []
        var files = fs.readdirSync(process.cwd() + '/rest/verbs/');

        files.forEach(File => {
            if (File.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/rest/verbs/' + File)
                verbs.push(jsonObject)
            }

        });
        return verbs
    }

}
module.exports = new VerbDao()

