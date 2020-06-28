interpret = function (hay, noun, framework) {
    var interpreters = []

    // get the default interpreter 
    // @todo refator file out
    defaultInterpreter = {}
    defaultInterpreter._interpret = function (hay, noun) {
        work = mustache.render(hay, noun);
        return mustache.render(hay, noun);
    };

    interpreters.push(defaultInterpreter)

    // layer ( framework ) interpreters ( could be N ? )
    interpreter_file_path = Conventions.VERB_BASE + "/" + framework + "/" + "interpreter.js"
    interpreters.push(interpreter)

    interpreters.forEach(function (interpreter) {
        hay = interpreter._interpret(hay, noun)
    })
    return hay
}
module.exports = interpret