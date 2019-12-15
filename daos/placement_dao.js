
class PlacementDao{

    findByGeneration(generation){
        var file_path = process.cwd()+"/placements/" +  generation + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByBaseurl(baseurl){
        var file_path = process.cwd()+"/placements/" +  baseurl + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByFile(file){
        var file_path = process.cwd()+"/placements/" +  file + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }

    findByGeneration(Generation){
        placements = this.loadAll()
        var found = {}
        placements.forEach(placement => {
            if( placement.generation === generation ){
                found = placement
            }
        });
        return found
    }
    findByBaseurl(Baseurl){
        placements = this.loadAll()
        var found = {}
        placements.forEach(placement => {
            if( placement.baseurl === baseurl ){
                found = placement
            }
        });
        return found
    }
    findByFile(File){
        placements = this.loadAll()
        var found = {}
        placements.forEach(placement => {
            if( placement.file === file ){
                found = placement
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
module.exports = new PlacementDao()

