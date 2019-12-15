class Framework {
    constructor() {
        this.frameworkDao = require('../daos/framework_dao.js')
    }

    instantiate(json) {
        var framework = new Framework()

        framework.json = json

        framework.tag = framework.json.tag

        // this is for nested models. to reference to the tag model frameworkibutes
       
        framework.parent = framework.json.parent

        framework.included = framework.json.included

        // this is for nested models. to reference to the included model frameworkibutes
        framework.includedsJson = framework.json.includeds
        framework.includeds = []
        if(framework.includedsJson !== undefined){
            framework.includedsJson.forEach(includedJson => {
                const Included = require('./included.js')
                var included = Included.instantiate(includedJson)
                included.setFramework(included)
                framework.includeds.push(included)
            });
            }

        framework.official = framework.json.official

        // this is for nested models. to reference to the official model frameworkibutes
        framework.officialJson = framework.json.officials

        return framework

    }


    findByTag(tag) {
        
        var json = this.FrameworkDao.findByTag(tag)
        return this.instantiate(json)
    }
    findByParent(parent) {
        
        var json = this.FrameworkDao.findByParent(parent)
        return this.instantiate(json)
    }
    findByIncluded(included) {
        
        var json = this.FrameworkDao.findByIncluded(included)
        return this.instantiate(json)
    }
    findByOfficial(official) {
        
        var json = this.FrameworkDao.findByOfficial(official)
        return this.instantiate(json)
    }

    loadAll() {
        this.frameworksJson = this.frameworkDao.loadAll()

        var frameworks = []
        let frameworkClass = new Framework()

        this.FrameworksJson.forEach(FrameworkJson => {
            
            let framework = frameworkClass.instantiate(FrameworkJson)
            frameworks.push(framework)
        });
        return frameworks
    }
}
module.exports = new Framework()
