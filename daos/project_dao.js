
class ProjectDao{
    findById(id){
        var file_path = process.cwd()+"/rest/projects/" +  id + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
   
    findByName(Name){
        projects = this.loadAll()
        var found = {}
        projects.forEach(project => {
            if( project.name === name ){
                found = project
            }
        });
        return found
    }
    findByRepository_name(Repository_name){
        projects = this.loadAll()
        var found = {}
        projects.forEach(project => {
            if( project.repository_name === repository_name ){
                found = project
            }
        });
        return found
    }
    findByRepository_user_name(Repository_user_name){
        projects = this.loadAll()
        var found = {}
        projects.forEach(project => {
            if( project.repository_user_name === repository_user_name ){
                found = project
            }
        });
        return found
    }
    
    loadAll() {
        var fs = require('fs');
        var s = []
        var Files = fs.readdirSync(process.cwd() + '/s/');

        sFiles.forEach(File => {
            if (File.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/s/' + File)
                s.push(jsonObject)
            }

        });
        return s
    }

}
module.exports = new ProjectDao()

