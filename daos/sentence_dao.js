class SentenceDao {
    findById() {
        return jsonObject
    }
    findByName() {

    }
    save() {

    }
    loadAll() {
        // console.log("loadAll : ")

        var fs = require('fs');
        // var sentencesFiles = []
        var sentences = []
        var sentencesFiles = fs.readdirSync(process.cwd() + '/sentences/');
        // fs.readdirSync('./sentences', function (err, files) {
        // console.log('-------------')

        // if (err) throw err;
        // console.log('-------------')
        // var fileList = files.filter(function (file) {
        //     let filePath= './sentences/'+file
        //     console.log("filePath : ")
        //     // console.dir(filePath)

        //     return fs.statSync(filePath).isFile() && /.*\.json$/.test(filePath); //絞り込み
        // })


        // sentencesFiles = fileList

        // });
        // console.log("putting into sentences : ")
        sentencesFiles.forEach(sentenceFile => {
            if (sentenceFile.endsWith(".json")) {
                var sentenceJsonObject = require(process.cwd() + '/sentences/' + sentenceFile)
                sentences.push(sentenceJsonObject)
            }

        });
        return sentences
    }
    // of(){
    //     const {{name}} = []

    // }
    // # file data 
    function () {
        verb_file_path = VERB_BASE + RESTBASE + "/" + this.name
        template = fs.readFileSync(verb_file_path, 'utf-8');
        return template
    }

}
module.exports = new SentenceDao()