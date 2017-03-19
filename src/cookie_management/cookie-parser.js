
var express = require('express');
var cookieParser = require('cookie-parser');
var util = require('util');

var app = express();
app.use(cookieParser());

//Se establece una cookie 'cookie_name'
app.get('/cookie',function(req, res){
     res.cookie('cookie_name', 'cookie_value',
       {expire: new Date() + 9999}).send(
       "Cookie is set: goto to browser's console and write document.cookie.");
});



app.get('/', function(req, res) {
  console.log("Cookies :  ", req.cookies);
});

//Eliminando la cookie establecida antes
app.get('/clearcookie', function(req,res){
     res.clearCookie('cookie_name');
     res.send('Cookie deleted');
});

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
