//authsession.js
"use strict";
let express = require('express'),
    app = express(),
    session = require('express-session');
let cookieParser = require('cookie-parser');
let path = require('path');
let util = require("util");
//let users = require('./users.json')
let bodyParser = require('body-parser')

let bcrypt = require("bcrypt-nodejs");
let hash = bcrypt.hashSync("armichepass");
var salt = bcrypt.genSaltSync(10);

var users = require('./users.json')
var fs = require('fs');
// let users = {
//   amy : hash,
//   juan : bcrypt.hashSync("juanpass"),
//   armiche : bcrypt.hashSync("armichepass")
// };

// let users = '{
//   "username":"john","password":"secret"
// }';

// var data = '{"username": "pepe", "password": "mk"}';
// var jsonn = JSON.parse(data);

app.set('port', (process.env.PORT || 8080));

// let instructions = `
// Visit these urls in the browser:
// <ul>
// <li> <a href="https://evalua-cookies-individual.herokuapp.com/">localhost:3000/</a> </li>
//   <li> <a href="https://evalua-cookies-individual.herokuapp.com/content">localhost:3000/content</a> </li>
//   <li> <a href="https://evalua-cookies-individual.herokuapp.com/content/capitulos/part1.html">localhost:3000/content/capitulos/part1.html</li>
//   <li> <a href="https://evalua-cookies-individual.herokuapp.com/content/capitulos/part2.html">localhost:3000/content/capitulos/part2.html</a> </li>
//   <li> <a href="https://evalua-cookies-individual.herokuapp.com/login?username=armiche&password=armichepass">localhost:3000/login?username=armiche&password=armichepass</a> </li>
//   <li> <a href="https://evalua-cookies-individual.herokuapp.com/login?username=amy&password=amyspassword">localhost:3000/login?username=amy&password=amyspassword</a> </li>
//   <li> <a href="https://evalua-cookies-individual.herokuapp.com/logout">localhost:3000/logout</a> </li>
// </ul>
// `;

//let layout = function(x) { return x+"<br />\n"+instructions; };

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(cookieParser());
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

app.use(function(req, res, next) {
  console.log("Cookies :  "+util.inspect(req.cookies));
  console.log("session :  "+util.inspect(req.session));
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
  else
    return res.sendStatus(401); // https://httpstatuses.com/401
};

//Login endpoint
app.post('/login', function (req, res) {
  console.log(req.query);
  console.log('username',users[req.body.username]);
  if (!req.body.username || !req.body.password) {
    console.log('login failed');
    res.send('login failed');
  } else if(req.body.username in users  &&
            bcrypt.compareSync(req.body.password, users[req.body.username])) {
    req.session.user = req.body.username;
    req.session.admin = true;
    //res.send(layout("login success! user "+req.session.user));
    res.redirect('/content')
  } else {
    console.log(`login ${util.inspect(req.query)} failed`);
    //res.send(layout(`login ${util.inspect(req.query)} failed. You are ${req.session.user || 'not logged'}`));
  }
});

// app.post('/login', function (req, res) {
//   console.log(req.body.username);
//   console.log(req.body.password);
//   console.log('y tal...');
//   console.log(req.query);
//   console.log(jsonn.username)
//   if (!req.body.username || !req.body.password) {
//     console.log('login failed');
//     res.send('login failed');
//   } else if(req.body.username in jsonn  &&
//             bcrypt.compareSync(req.body.password, jsonn[req.body.username])) {
//     req.session.user = req.body.username;
//     req.session.admin = true;
//     res.send(layout("login success! user "+req.session.user));
//   } else {
//     console.log(`login ${util.inspect(req.body)} failed`);
//     res.send(layout(`login ${util.inspect(req.body)} failed. You are ${req.session.user || 'not logged'}`));
//   }
// });

app.get('/', function(req, res) {
  res.render('login', {message: 'Welcome!'});
});

app.get('/registro', function(req, res) {
  res.render('registro');
});

//Guardar los usuarios en users.json después de hacer el registro
app.post('/reg', function (req, res) {

  var obj = require('./users.json');
  obj[req.body.username] = bcrypt.hashSync(req.body.password, salt);
  fs.writeFile('./users.json', JSON.stringify(obj), function (err) {
    console.log(err);
  });

});


app.use(express.static('public'));

// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send(layout("logout success!"));
});

// Get content endpoint
app.get('/content/*?',
    auth  // next only if authenticated
);

app.use('/content', express.static(path.join(__dirname, 'gh-pages')));

app.listen(app.get('port'), function() {
  console.log('Node app ejecutandose en el puerto', app.get('port'));
});
