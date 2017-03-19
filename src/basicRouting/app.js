var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.put('/capitulos/api_router', function (req, res) {
  res.send('Got a PUT request at /capitulos/api_router')
})

app.delete('/capitulos/api_router', function (req, res) {
  res.send('Got a DELETE request at /capitulos/api_router')
})

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})