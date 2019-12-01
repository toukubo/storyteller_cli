fs = require('fs');
mustache = require('mustache')
require('./setup_path.js')
req = require('./parse.js')

require('./routing.js')(req)
