const db = require('../db');
var md5 = require('md5');

module.exports.login =  function(request, response){
    response.render('auth/login');
};

module.exports.postLogin = function(request, response){
    var email = request.body.email;

    var user = db.get('users').find({email: email}).value();

    if(!user){
        response.render('auth/login', {
            errors: [
                "Wrong user or password!"
            ],
            values: request.body
        });
        return;
    }


    var password = md5(request.body.password);

    if(user.password !== password){
        response.render('auth/login', {
            errors: [
                "Wrong user or password!"
            ],
            values: request.body
        });
        return;
    }

    response.cookie('userId', user.id);

    response.redirect('/users'); 
};