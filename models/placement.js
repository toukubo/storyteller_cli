class Placement {
    constructor() {
        this.placementDao = require('../daos/placement_dao.js')
    }

    instantiate(json) {
        var placement = new Placement()

        placement.json = json

        placement.generation = placement.json.generation

        // this is for nested models. to reference to the generation model placementibutes
        placement.generationsJson = placement.json.generations
        placement.generations = []
        placement.generationsJson.forEach(generationJson => {
            const Generation = require('./generation.js')
            var generation = Generation.instantiate(generationJson)
            generation.setPlacement(generation)
            placement.generations.push(generation)
        });
        placement.baseurl = placement.json.baseurl

        // this is for nested models. to reference to the baseurl model placementibutes
        placement.baseurlsJson = placement.json.baseurls
        placement.baseurls = []
        placement.baseurlsJson.forEach(baseurlJson => {
            const Baseurl = require('./baseurl.js')
            var baseurl = Baseurl.instantiate(baseurlJson)
            baseurl.setPlacement(baseurl)
            placement.baseurls.push(baseurl)
        });
        placement.file = placement.json.file

        // this is for nested models. to reference to the file model placementibutes
        placement.filesJson = placement.json.files
        placement.files = []
        placement.filesJson.forEach(fileJson => {
            const File = require('./file.js')
            var file = File.instantiate(fileJson)
            file.setPlacement(file)
            placement.files.push(file)
        });
        return placement

    }
    create(req){
        var basepath = "/Users/toukubo/storyteller_cli/test/"
        
        var file_path = basepath+"/"+this.generation.file_path
        var path = require('path');
        var directory =  path.dirname(file_path);

        // file generate to the place.file
        if (!fs.existsSync(directory)){
            var shell = require('shelljs');
            shell.mkdir('-p',directory)
        }
        fs.writeFileSync(file_path,this.generation.generatedText, null, 2)
    }

    findByGeneration(generation) {
        
        var json = this.PlacementDao.findByGeneration(generation)
        return this.instantiate(json)
    }
    findByBaseurl(baseurl) {
        
        var json = this.PlacementDao.findByBaseurl(baseurl)
        return this.instantiate(json)
    }
    findByFile(file) {
        
        var json = this.PlacementDao.findByFile(file)
        return this.instantiate(json)
    }

    loadAll() {
        this.placementsJson = this.placementDao.loadAll()

        var placements = []
        let placementClass = new Placement()

        this.PlacementsJson.forEach(PlacementJson => {
            
            let placement = placementClass.instantiate(PlacementJson)
            placements.push(placement)
        });
        return placements
    }
}
module.exports = new Placement()
