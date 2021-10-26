const User = require('../../models/user.model');

module.exports.index = async function(request, response){
    var users = await User.find(function(error, users){
        if(error)
        {
            response.json("list user error!");
        }
        else
        {
            response.json(users);
        }
    });
};

module.exports.postCreate = async function(request, response){
    var user = await User.create(request.body, function(error, user){
        if(error)
        {
            response.json("create new user error!");
        }
        else
        {
            response.json(user);
        }
    });
}

module.exports.getById = async function(request, response){
    var id = request.params.id;
    var user = await User.findOne({_id: id}, function(error, user){
        if(error)
        {
            response.json("get new user error!");
        }
        else
        {
            response.json(user);
        }
    });
    
}

module.exports.search = async function(request, response){
    var searchString = request.query.q;
    // "i" accept lowercase and uppercase
    var matchUsers = await User.find({name: new RegExp(searchString, "i")}, function(error, matchUsers){
        if(error)
        {
            response.json("Searching Error!");
        }
        if(matchUsers.length == 0){
            response.json("name invalid!");
        }
        else
        {
            response.json(matchUsers);
        }
    }); 

    
}

module.exports.update = async function(request, response){
    var user = await User.findByIdAndUpdate(request.body._id,{ email: request.body.email, name: request.body.name,
         phone: request.body.phone, password: request.body.password }, function(error, user)
        {
            if(error)
            {
                response.json("Update error!");
            }
            else
            {
                response.json("Update successfull");
                response.json(user);
            }
        });
};

module.exports.delete = async function(request, response){
    await User.findByIdAndDelete(request.body._id, function(error, docs){
        if(error)
        {
            response.json("Delete error!");
        }
        else
        {
            response.json("Delete successfull!");
            response.json(User);
        }
    });
};





