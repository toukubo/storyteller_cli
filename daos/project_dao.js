
class ProjectDao{

    findByCore(core){
        var file_path = process.cwd()+"/projects/" +  core + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByDescription(description){
        var file_path = process.cwd()+"/projects/" +  description + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByStoryteller_branch_name(storyteller_branch_name){
        var file_path = process.cwd()+"/projects/" +  storyteller_branch_name + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByName(name){
        var file_path = process.cwd()+"/projects/" +  name + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByRepository_name(repository_name){
        var file_path = process.cwd()+"/projects/" +  repository_name + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByRepository_user_name(repository_user_name){
        var file_path = process.cwd()+"/projects/" +  repository_user_name + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }

    findByCore(Core){
        projects = this.loadAll()
        var found = {}
        projects.forEach(project => {
            if( project.core === core ){
                found = project
            }
        });
        return found
    }
    findByDescription(Description){
        projects = this.loadAll()
        var found = {}
        projects.forEach(project => {
            if( project.description === description ){
                found = project
            }
        });
        return found
    }
    findByStoryteller_branch_name(Storyteller_branch_name){
        projects = this.loadAll()
        var found = {}
        projects.forEach(project => {
            if( project.storyteller_branch_name === storyteller_branch_name ){
                found = project
            }
        });
        return found
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

