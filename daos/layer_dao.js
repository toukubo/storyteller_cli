class LayerDao {
    findById(id){
        var file_path = process.cwd()+"/rest/layers/" +  id + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByParent(Parent) {
        layers = this.loadAll()
        var found = {}
        layers.forEach(layer => {
            if (layer.parent === parent) {
                found = layer
            }
        });
        return found
    }
    findByIncluded(Included) {
        layers = this.loadAll()
        var found = {}
        layers.forEach(layer => {
            if (layer.included === included) {
                found = layer
            }
        });
        return found
    }
    findByOfficial(Official) {
        layers = this.loadAll()
        var found = {}
        layers.forEach(layer => {
            if (layer.official === official) {
                found = layer
            }
        });
        return found
    }

    loadAll() {
        var fs = require('fs');
        var layers = []
        var layersFiles = fs.readdirSync(process.cwd() + '/rest/layers/');

        layersFiles.forEach(File => {
            if (File.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/rest/layers/' + File)
                layers.push(jsonObject)
            }

        });
        return layers
    }

}
module.exports = new LayerDao()