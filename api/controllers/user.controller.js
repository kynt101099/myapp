const User = require('../../models/user.model');

module.exports.index = async function(request, response){
    try{
        var users = await User.find();
        if(users.length === 0)
        {
            console.log("not have any user!");
        }
        else
        {
            response.json(users);
            console.log("list user");
        }
    }catch(error){
        console.log("list user error");
    }
};

module.exports.postCreate = async function(request, response){
    try
    {
        var user = await User.create(request.body);
        response.json(user);
        console.log("Create user successfull");
    }
    catch(error)
    {
        console.log("delete user error!");
    }
    
}

module.exports.getById = async function(request, response){
    var id = request.params.id;
    try{
        const user = await User.findOne({_id: id});
        response.json(user);

    }catch(error){
        console.log("get detail user error!");
    }
}

module.exports.search = async function(request, response){
    var searchString = request.query.q;
    // "i" accept lowercase and uppercase
    try{
        const users = await User.find({name: new RegExp(searchString, "i")});
        if(users.length === 0){
            response.json("name invalid!");
        }
        else{
            response.json(users);
        }
    }catch(error){
        console.log("Search error!");
    }
}

module.exports.update = async function(request, response){
    try
    {
        var user = await User.findByIdAndUpdate(request.body._id,{ email: request.body.email, name: request.body.name,
            phone: request.body.phone, password: request.body.password });

        response.json(user);
    }
    catch(error){
        console.log("update error!");
    }
};

module.exports.delete = async function(request, response){
    try{
        var user = await User.findByIdAndDelete(request.body._id);

        response.json(user);
    }catch(error){
        console.log("delete error!");
    }
};





