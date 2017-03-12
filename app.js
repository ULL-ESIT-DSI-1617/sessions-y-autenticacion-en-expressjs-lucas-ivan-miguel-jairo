"use strict";


var express = require('express');
var app = express();
var  path = require('path');
var proces = require('child_process');





app.set('port', (process.env.PORT || 5000));
app.use(express.static('gh-pages'));



app.get('/', function(request, response){
  response.sendfile('index');  
  
});


    


app.listen(app.get('port'), function() {
  console.log('Node app ejecutandose en el puerto', app.get('port'));
});

module.exports = app;