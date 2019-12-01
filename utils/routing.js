module.exports = function(req){
    let routes = require('./routes.js')

    var the_route = {}



    // default convention. calling model + crud verbs. with params.
    the_route = '../models/'+req.command+".js"

    if(req.bff){
        the_route = '../bff/'+req.command+"."+req.operation+".js"
    }
    
    require(the_route)

}

