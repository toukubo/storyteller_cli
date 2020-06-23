class FrameworkDao{

    findByNoun(noun_id){
        var file_path = process.cwd()+"/rest/frameworks/" +  id + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }

    findById(id){
        var file_path = process.cwd()+"/rest/frameworks/" +  id + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByTag(tag){
        var file_path = process.cwd()+"/frameworks/" +  tag + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByParent(parent){
        var file_path = process.cwd()+"/frameworks/" +  parent + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByIncluded(included){
        var file_path = process.cwd()+"/frameworks/" +  included + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByOfficial(official){
        var file_path = process.cwd()+"/frameworks/" +  official + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }

    of(noun_id){
        return this.loadAll().filter(framework => framework.word===noun_id)
    }
    

    findByTag(Tag){
        frameworks = this.loadAll()
        var found = {}
        frameworks.forEach(framework => {
            if( framework.tag === tag ){
                found = framework
            }
        });
        return found
    }
    findByParent(Parent){
        frameworks = this.loadAll()
        var found = {}
        frameworks.forEach(framework => {
            if( framework.parent === parent ){
                found = framework
            }
        });
        return found
    }
    findByIncluded(Included){
        frameworks = this.loadAll()
        var found = {}
        frameworks.forEach(framework => {
            if( framework.included === included ){
                found = framework
            }
        });
        return found
    }
    findByOfficial(Official){
        frameworks = this.loadAll()
        var found = {}
        frameworks.forEach(framework => {
            if( framework.official === official ){
                found = framework
            }
        });
        return found
    }
    
    loadAll() {
        var fs = require('fs');
        var s = []
        var frameworksFiles = fs.readdirSync(process.cwd() + '/frameworkss/');

        frameworksFiles.forEach(frameworkFile => {
            if (frameworkFile.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/frameworks/' + frameworkFile)
                frameworks.push(jsonObject)
            }

        });
        return frameworks
    }

}
module.exports = new FrameworkDao()

