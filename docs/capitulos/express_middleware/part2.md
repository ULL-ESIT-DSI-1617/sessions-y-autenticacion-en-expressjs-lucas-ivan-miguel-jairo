> ## Middleware de nivel de aplicación
> Los middleware a nivel a aplicacion ejecutan el metodo app.use donde le pasamos req , resp y de manera opcional el next
> Ejemplos de codigo de middleware
> Ejemplo de un middleware sin ruta de montaje

> ```javascript
var app = express()
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
```
> Ejemplo de middleware con punto de montaje

> ```javascript
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
```
> Ejemplo de middleware manejando el controlador GET

> ```javascript
app.get('/user/:id', function (req, res, next) {
  res.send('USER')
})
```

> Esto es un codigo de ejemplo de un middleware donde se trabaja con una subpila

> ```javascript
app.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
```

> Esto es una ejemplo de middleware donde se maneja dos rutas por medio de handler pero el segundo middleware no se podra ejecutar ya que la peticion respuesta ya se ha hecho con anterioridad

> ```javascript
app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id)
  next()
}, function (req, res, next) {
  res.send('User Info')
})
// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
  res.end(req.params.id)
})
```

> utilize next('route') para pasar el testigo al siguiente middleware de la pila

> ```javascript
app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // render a regular page
  res.render('regular')
})
// handler for the /user/:id path, which renders a special page
app.get('/user/:id', function (req, res, next) {
  res.render('special')
})
```