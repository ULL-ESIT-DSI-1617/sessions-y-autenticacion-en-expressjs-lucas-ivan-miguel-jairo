> ## Middleware de terceros
>Los middleware de tercero pueden cargarse a nivel de enrutador o a nivel de aplicacion.
para la instalacion de un middleware de tercero habra que seguir los siguientes pasos
> 1) npm install middleware_de_terceros
> 2) agregar los siguientes objetos en la definicion del codigo
> un ejemplo practico seria :

> ```javascript
var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')
// load the cookie-parsing middleware
app.use(cookieParser())
```
como se puede ver se declara el cookie-parser y despues se usa con el metodo use