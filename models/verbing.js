class Verbing{
    constructor(){
        this.VerbingDao = require('../daos/Verbing_dao.js')
    }
    create(params){
        this.jsonObject = {}
        this.jsonObject.attrs = params.attrs
        this.jsonObject.hay = params.hay
        this.jsonObject.references = params.references
        this.jsonObject.verb_template = params.verb_template
  	// this.Verbing.save(this.jsonObject)
    }
    update(id){
       
    }
    delete(id){

       
    }
    show(id){
         this.jsonObject = this.VerbingDao.findById(id)
         console.stdout.write(this.jsonObject)
    }
}
module.exports = new Verbing()