class Project {
    constructor() {
        this.projectDao = require('../daos/project_dao.js')
    }

    instantiate(json) {
        var project = new Project()

        project.json = json

        project.core = project.json.core

        // this is for nested models. to reference to the core model projectibutes
        project.coresJson = project.json.cores
        project.cores = []
        project.coresJson.forEach(coreJson => {
            const Core = require('./core.js')
            var core = Core.instantiate(coreJson)
            core.setProject(core)
            project.cores.push(core)
        });
        project.description = project.json.description

        // this is for nested models. to reference to the description model projectibutes
        project.descriptionsJson = project.json.descriptions
        project.descriptions = []
        project.descriptionsJson.forEach(descriptionJson => {
            const Description = require('./description.js')
            var description = Description.instantiate(descriptionJson)
            description.setProject(description)
            project.descriptions.push(description)
        });
        project.storyteller_branch_name = project.json.storyteller_branch_name

        // this is for nested models. to reference to the storyteller_branch_name model projectibutes
        project.storyteller_branch_namesJson = project.json.storyteller_branch_names
        project.storyteller_branch_names = []
        project.storyteller_branch_namesJson.forEach(storyteller_branch_nameJson => {
            const Storyteller_branch_name = require('./storyteller_branch_name.js')
            var storyteller_branch_name = Storyteller_branch_name.instantiate(storyteller_branch_nameJson)
            storyteller_branch_name.setProject(storyteller_branch_name)
            project.storyteller_branch_names.push(storyteller_branch_name)
        });
        project.name = project.json.name

        // this is for nested models. to reference to the name model projectibutes
        project.namesJson = project.json.names
        project.names = []
        project.namesJson.forEach(nameJson => {
            const Name = require('./name.js')
            var name = Name.instantiate(nameJson)
            name.setProject(name)
            project.names.push(name)
        });
        project.repository_name = project.json.repository_name

        // this is for nested models. to reference to the repository_name model projectibutes
        project.repository_namesJson = project.json.repository_names
        project.repository_names = []
        project.repository_namesJson.forEach(repository_nameJson => {
            const Repository_name = require('./repository_name.js')
            var repository_name = Repository_name.instantiate(repository_nameJson)
            repository_name.setProject(repository_name)
            project.repository_names.push(repository_name)
        });
        project.repository_user_name = project.json.repository_user_name

        // this is for nested models. to reference to the repository_user_name model projectibutes
        project.repository_user_namesJson = project.json.repository_user_names
        project.repository_user_names = []
        project.repository_user_namesJson.forEach(repository_user_nameJson => {
            const Repository_user_name = require('./repository_user_name.js')
            var repository_user_name = Repository_user_name.instantiate(repository_user_nameJson)
            repository_user_name.setProject(repository_user_name)
            project.repository_user_names.push(repository_user_name)
        });
        return project

    }


    findByCore(core) {
        
        var json = this.ProjectDao.findByCore(core)
        return this.instantiate(json)
    }
    findByDescription(description) {
        
        var json = this.ProjectDao.findByDescription(description)
        return this.instantiate(json)
    }
    findByStoryteller_branch_name(storyteller_branch_name) {
        
        var json = this.ProjectDao.findByStoryteller_branch_name(storyteller_branch_name)
        return this.instantiate(json)
    }
    findByName(name) {
        
        var json = this.ProjectDao.findByName(name)
        return this.instantiate(json)
    }
    findByRepository_name(repository_name) {
        
        var json = this.ProjectDao.findByRepository_name(repository_name)
        return this.instantiate(json)
    }
    findByRepository_user_name(repository_user_name) {
        
        var json = this.ProjectDao.findByRepository_user_name(repository_user_name)
        return this.instantiate(json)
    }

    loadAll() {
        this.projectsJson = this.projectDao.loadAll()

        var projects = []
        let projectClass = new Project()

        this.ProjectsJson.forEach(ProjectJson => {
            
            let project = projectClass.instantiate(ProjectJson)
            projects.push(project)
        });
        return projects
    }
}
module.exports = new Project()