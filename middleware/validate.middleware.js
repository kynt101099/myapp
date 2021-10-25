module.exports.createValidation = function(request, response, next){
    var errors = [];
    if(!request.body.name){
        errors.push('Name is require!');
    }
    if(!request.body.phone){
        errors.push('Phone is require!');
    }
    if(errors.length){
        response.render('user/create', {
            errors: errors,
            values: request.body
        });
        return;
    }

    next();
}