#!/usr/bin/env node
module.exports = function(req){

var Generation =require('../models/generation.js')
    let generation = new Generation()
    var sentenceObject = {}

    sentenceObject.verb = req.params.verb_name
    sentenceObject.noun = req.params.noun_name
    console.log("sentenceObject : ")
    console.dir(sentenceObject)
    
    // template = verb.template(LAYER);
    output = generation.interpret(sentenceObject,LAYER)
     
    console.clear();
    process.stdout.write(output);
    
}
