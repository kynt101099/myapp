const express = require('express');
const app = express();

const authRouters = require('./routes/auth.route');
const userRouters = require('./routes/user.route');
const cookieParser = require('cookie-parser');
const middleware = require('./middleware/auth.middleware');
var mongoose = require("mongoose");
const apiUserRoutes = require('./api/routers/user.routers');

const port = 3000;

//connect db to mongo
mongoose.connect('mongodb://localhost/express-demo');

var bodyParser = require('body-parser');

//connect db to lowdb
const db = require('./db')

//views engine
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser()); 

//set folder static
app.use(express.static('public'));

app.get('/', function(request, response){
    response.render('index', {
        name: 'KyNT'
    });
});


app.use('/users', middleware.requiredAuth, userRouters);
app.use('/auth', authRouters);
app.use('/api/users', apiUserRoutes);


app.listen(3000, function(){
    console.log(`Example app listening at http://localhost:${port}`)
});
