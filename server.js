//authsession.js
"use strict";
let express = require('express'),
    app = express(),
    session = require('express-session');
let cookieParser = require('cookie-parser');
let path = require('path');
let util = require("util");
let bodyParser = require('body-parser')

let bcrypt = require("bcrypt-nodejs");
let hash = bcrypt.hashSync("armichepass");
var salt = bcrypt.genSaltSync(10);


var users = require('./users.json')
var fs = require('fs');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(cookieParser());
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

app.use(function(req, res, next) {
  console.log("Cookies :  "+ util.inspect(req.cookies));
  console.log("session :  "+ util.inspect(req.session));
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// Authentication and Authorization Middleware
let auth = function(req, res, next) {
  if (req.session && req.session.user in users)
    return next();
  else{
     //  return res.render('login', {message: 'User NOT registred'+res.sendStatus(401)}); 
       return res.sendStatus(401); // https://httpstatuses.com/401
  
    
  } 
};

//Login endpoint
app.post('/login', function (req, res) {
  console.log("aaaaaaaaaaaaaaa" + req.body.username);
    console.log("aaaaaaaaaaaaaaa" + req.body.password);
  console.log('username',users[req.body.username]);
  
  if (!req.body.username || !req.body.password) {
       console.log('login failedaaaaaaaaaaa' + req.body.username);
       console.log('login failedaaaaaaaaaaa' + req.body.password);
       res.send('login failedaa');
  } else if(req.body.username in users  &&
            bcrypt.compareSync(req.body.password, users[req.body.username])) {
            req.session.user = req.body.username;
            req.session.admin = true;
            res.redirect('/content');
  } else {
          console.log(`login ${util.inspect(req.query)} failed`);
          res.render('login',{message: 'Failed. You are user not logged'});
         // res.send(`login ${util.inspect(req.query)} failed. You are ${req.session.user || 'not logged'}`);
  }
});



app.get('/', function(req, res) {
  //res.render('inicio');
  res.render('index', {message: 'Welcome!'});
  
});

app.get('/loguearse', function(req, res) {
  res.render('login', {message: 'Welcome!'});
});

app.get('/registro', function(req, res) {
  res.render('registro', {message: 'Welcome!'});
});

app.get('/actualiza', function(req, res) {
  res.render('actualizarcontraseña', {message: 'Welcome!'});
});


//Guardar los usuarios en users.json después de hacer el registro
app.post('/reg', function (req, res) {
  var obj = require('./users.json');
  
  console.log("Usuarioa" + req.body.username);
  console.log("aaaaaaaaaaaaaaa" + req.body.password);
  console.log('username',bcrypt.hashSync(users[req.body.username]));
  console.log('username',users[req.body.password]);
  
  obj[req.body.username] = bcrypt.hashSync(req.body.password, salt);
  console.log("Mi objeto "+ obj);
  fs.writeFile('./users.json', JSON.stringify(obj), function (err) {
          console.log(err);
  });
   console.log('User registred');
    res.render('registro', {message: 'User registred'});
  // res.send('User registred');
});

//Actualizar el password del usuario.
app.post('/act', function (req, res)
{
  console.log(req.query);
  console.log('username',users[req.body.username]);
  if (!req.body.username || !req.body.password) {
        console.log('failed update');
        res.send('failed update');
  } else if(req.body.username in users  &&
            bcrypt.compareSync( req.body.password, users[req.body.username])) {
           
            req.session.user = req.body.username;
            req.session.admin = true;
            
            var obj = require('./users.json');
            obj[req.body.username] = bcrypt.hashSync(req.body.newpassword, salt);
            console.log("Este es mi nuevo password : " + req.body.username);
           /* fs.writeFile('./users.json', JSON.stringify(obj), function (err) {
                  console.log(err);
            });*/
           // res.redirect('/actualiza');
 res.render('actualizarcontraseña',{message: 'Actualizado la contraseña' });
  } else {
    console.log(`Update ${util.inspect(req.query)} failed`);
    //res.send(layout(`login ${util.inspect(req.query)} failed. You are ${req.session.user || 'not logged'}`));
  }
  
  
  });



app.use(express.static('public'));
app.use(express.static('public/materialize'));
app.use(express.static('public/materialize/css'));
app.use(express.static('public/materialize/fonts'));
app.use(express.static('public/materialize/js'));
// Logout endpoint
app.get('/logout', function (req, res) {
   req.session.destroy();
   res.send("logout success!");
});


// Get content endpoint
app.get('/content/*?',
    auth  // next only if authenticated
);
app.use('/content', express.static(path.join(__dirname, 'gh-pages')));


// Crear puesto de escucha
app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function() {
  console.log('Node app ejecutandose en el puerto', app.get('port'));
});
