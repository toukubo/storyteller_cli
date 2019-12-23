class Project {
    constructor() {
        this.projectDao = require('../daos/project_dao.js')
    }

    instantiate(json) {
        var project = new Project()

        project.json = json

        project.core = project.json.core

        // this is for nested models. to reference to the core model projectibutes
        project.description = project.json.description
        project.storyteller_branch_name = project.json.storyteller_branch_name

        // this is for nested models. to reference to the storyteller_branch_name model projectibutes
        project.name = project.json.name
        project.repository_name = project.json.repository_name

        project.repository_user_name = project.json.repository_user_name
        project.frameworks = json.frameworks

        // this is for nested models. to reference to the repository_user_name model projectibutes

        return project

    }

    findById(id) {
        
        var json = this.projectDao.findById(id)
        return this.instantiate(json)
    }
    findByCore(core) {
        
        var json = this.projectDao.findByCore(core)
        return this.instantiate(json)
    }
    findByDescription(description) {
        
        var json = this.projectDao.findByDescription(description)
        return this.instantiate(json)
    }
    findByStoryteller_branch_name(storyteller_branch_name) {
        
        var json = this.projectDao.findByStoryteller_branch_name(storyteller_branch_name)
        return this.instantiate(json)
    }
    findByName(name) {
        
        var json = this.projectDao.findByName(name)
        return this.instantiate(json)
    }
    findByRepository_name(repository_name) {
        
        var json = this.projectDao.findByRepository_name(repository_name)
        return this.instantiate(json)
    }
    findByRepository_user_name(repository_user_name) {
        
        var json = this.projectDao.findByRepository_user_name(repository_user_name)
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
