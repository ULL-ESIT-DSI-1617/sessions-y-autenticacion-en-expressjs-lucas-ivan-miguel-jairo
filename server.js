"use strict";
var express = require('express'),
    app = express(),
    session = require('express-session');
var cookieParser = require('cookie-parser');
var path = require('path');
var util = require("util");
var bodyParser = require('body-parser')

var bcrypt = require("bcrypt-nodejs");

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
  //console.log("Cookies :  "+ util.inspect(req.cookies));
  //console.log("session :  "+ util.inspect(req.session));
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// Authentication and Authorization Middleware
let auth = function(req, res, next) {
  if (req.session && req.session.user in users){
    return next();
  }
  else{
       // res.render('login', {message: 'User NOT registred'+res.sendStatus(401)}); 
       return res.sendStatus(401); // https://httpstatuses.com/401
  
    
  } 
};

//Login endpoint
app.post('/login', function (req, res) {
  console.log(req.session.user+"dee");
  
  if (!req.body.username || !req.body.password) {
      
       res.render('login',{message: 'Campo vacio'});
  } else if(req.body.username in users  &&
            bcrypt.compareSync(req.body.password, users[req.body.username])) {
            req.session.user = req.body.username;
            req.session.admin = true;
            res.render('libro', {message:"Bienvenido "+req.body.username});
  } else {
          console.log('login ${util.inspect(req.query)} failed');
          res.render('login',{message: 'Failed. You are user not logged'});
         // res.send(`login ${util.inspect(req.query)} failed. You are ${req.session.user || 'not logged'}`);
  }
});



app.get('/', function(req, res) {
  //res.render('inicio');
  res.render('index', {message: 'Bienvenido!'});
  
});

app.get('/loguearse', function(req, res) {
  res.render('login', {message: 'Bienvenido!'});
});

app.get('/registro', function(req, res) {
  res.render('registro', {message: 'Bienvenido!'});
});

app.get('/actualiza', function(req, res) {
  res.render('actualizarcontraseña', {message: 'Bienvenido!'});
});

app.get('/libro', function(req, res) {
    res.render('libro', {message: 'Bienvenido '})
})

//Guardar los usuarios en users.json después de hacer el registro
app.post('/reg', function (req, res) {
  var obj = require('./users.json');
  
 if((req.body.username!="undefined") && (req.body.password !="undefined") &&
 req.body.password == req.body.password2 && !(req.body.username in users) )
  {
        obj[req.body.username] = bcrypt.hashSync(req.body.password);
        console.log("Mi objeto "+ obj);
        fs.writeFile('./users.json', JSON.stringify(obj,"",4), function (err) {
                console.log(err);
        });
    console.log('User registred');
  
   res.render('login');
  }
   else
    res.render('registro', {message: 'Registro incorrecto'});
  // res.send('User registred');
});

//Actualizar el password del usuario.
app.post('/act', function (req, res)
{
  
  if (!req.body.username || !req.body.password) 
  {
        console.log('failed update');
        res.render('actualizarcontraseña',{message: 'Actualización Fallida' });
  } 
  
  else if(req.body.username in users  &&
            bcrypt.compareSync( req.body.password, users[req.body.username])) 
  {
           
            req.session.user = req.body.username;
            console.log(req.session.user + "muestrsl");
            req.session.admin = true;
            
            var obj = require('./users.json');
            obj[req.body.username] = bcrypt.hashSync(req.body.newpassword);
            console.log("Este es mi nuevo password : " + req.body.username);
           
          res.render('actualizarcontraseña',{message: 'Actualizado la contraseña' });
  } 
  else 
  {
    console.log('Update ${util.inspect(req.query)} failed');
       res.render('actualizarcontraseña',{message: 'Actualización Fallida' });
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
   res.render('index',{message: "Bienvenido"});
});

// Get content endpoint
app.get('/content/*?',auth );
app.use('/content', express.static(path.join(__dirname, 'gh-pages')));

// Crear puesto de escucha
app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function() {
  console.log('Node app ejecutandose en el puerto', app.get('port'));
});
