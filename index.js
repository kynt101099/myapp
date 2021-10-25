const express = require('express');
const app = express();

const authRouters = require('./routes/auth.route');
const userRouters = require('./routes/user.route');
const cookieParser = require('cookie-parser');
const middleware = require('./middleware/auth.middleware');

const port = 3000;

var bodyParser = require('body-parser');

const db = require('./db')

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser()); 


app.use(express.static('public'));

app.get('/', function(request, response){
    response.render('index', {
        name: 'KyNT'
    });
});



app.use('/users', middleware.requiredAuth, userRouters);
app.use('/auth', authRouters);

app.listen(3000, function(){
    console.log(`Example app listening at http://localhost:${port}`)
});
