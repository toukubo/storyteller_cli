#!/usr/bin/env node

module.exports = function (req) {

    var Generation = require('../models/generation.js')
    let generation = new Generation()
    var sentenceObject = {}

    sentenceObject.verb = req.params.verb_name
    sentenceObject.noun = req.params.noun_name

    // template = verb.template(LAYER);
    output = generation.interpret(sentenceObject, LAYER)

    // console.clear();
    process.stdout.write(output);

    // if (req.file) {
    //     fs.open("./out", "a+", (err, fd) => {
    //         if(err) throw err;
    //         fs.appendFile(fd, output, 'utf8', (err) => {
    //             fs.close(fd, (err) => {
    //               if (err) throw err;
    //             });
    //             if (err) throw err;
    //           });
            
            
    //     });
    // }

}