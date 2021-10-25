const db = require('../db');
const shortid = require('shortid');

module.exports.index =  function(request, response){
    var page = parseInt(request.query.page) || 1;
    var numItemPage = 10

    var start = (page - 1) * numItemPage;
    var end = page * numItemPage;


    response.render('user/index', {
        users: db.get('users').value().slice(start, end)
    });
};

module.exports.search = function(request, response){
    var searchString = request.query.q;
    var matchedUsers = db.get('users').filter(function(user) {
        return user.name.toLowerCase().indexOf(searchString) !== -1;
    });

    response.render('user/index', {
        users: matchedUsers.value()
    });
}

module.exports.getById = function(request, response){
    var id = request.params.id;
    var user = db.get('users').find({ id: id }).value();

    response.render('user/viewDetail', {user: user});
}

module.exports.getCreate = function(request, response){
    response.render('user/create');
}

module.exports.postCreate =  function(request, response){
    request.body.id = shortid.generate();

    db.get('users').push(request.body).write()
    response.redirect('/users')
}

