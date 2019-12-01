fs = require('fs');
mustache = require('mustache')
require('./setup_path.js')
req = require('./parse.js')
console.log("req : ")
console.dir(req)

require('./routing.js')(req)
