> ## Middleware de nivel enrutador
> para utilizar el middlere router hay que definir express.Router() al principio del codigo.
> En vez de utilizar middleware app.use se utiliza router.use.

> ```javascript
var router = express.Router()
```

> Se utiliza para control de rutas interno
> En el siguiente codigo se muestra la diferentcia entre la declracion de un objeto router a un objeto > a nivel de aplicacion

> ```javascript
var app = express()
var router = express.Router()
// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // render a regular page
  res.render('regular')
})
// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id)
  res.render('special')
})
// mount the router on the app
app.use('/', router) 
})
```
