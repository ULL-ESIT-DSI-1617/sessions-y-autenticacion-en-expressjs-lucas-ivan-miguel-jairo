> ### Algunos Métodos

>  ###**router.all (camino, [de devolución de llamada, ...] devolución de llamada)**

> Este método es igual que los router.METHOD()métodos, excepto que coincide con todos los métodos HTTP (verbos).
Este método es muy útil para el mapeo lógico "global" para los prefijos de ruta específicas o partidos arbitrarias. 
Por ejemplo, si se coloca la siguiente ruta en la parte superior de todas las otras definiciones de ruta, que requeriría 
que todas las rutas desde ese punto en requerirían autenticación y cargar automáticamente un usuario. Tenga en cuenta que 
estas devoluciones de llamada no tienen que actuar como puntos finales; loadUser puede realizar una tarea, a continuación, 
llamar next()a continuar búsqueda de rutas posteriores.

> ```javascript
router.all('*', requireAuthentication, loadUser);
//Tambien se puede poner asi
router.all('*', requireAuthentication)
router.all('*', loadUser);
//Otro ejemplo.
router.all('/api/*', requireAuthentication);
```

> ***
> ### **router.METHOD (camino, [de devolución de llamada, ...] devolución de llamada)**

> Los router.METHOD()métodos proporcionan la funcionalidad de enrutamiento en Express, donde método es uno de los métodos HTTP, 
como GET, PUT, POST, y así sucesivamente, en minúsculas. Por lo tanto, los métodos actuales son router.get(), router.post(), 
router.put(), y así sucesivamente.

> Puede proporcionar múltiples servicios repetidos, y todos son tratados por igual, y se comportan igual que el middleware,
excepto que estas devoluciones de llamada pueden invocar next('route') para eludir la devolución de llamada ruta restante (s).
Puede utilizar este mecanismo para llevar a cabo precondiciones en una ruta a continuación,
pasar el control a rutas posteriores, cuando no hay ninguna razón para continuar con la ruta buscada.

> El siguiente fragmento ilustra posible la definición de la ruta más sencilla. Expresa traduce las cadenas de ruta a las 
expresiones regulares, que se utiliza internamente para que coincida con las peticiones entrantes. Las cadenas de consulta
se no cuenta a la hora de realizar estos partidos, por ejemplo "GET /" se correspondería con la siguiente ruta, como sería 
"GET /? Name = tobi".

> ```javascript
router.get('/', function(req, res){
  res.send('hello world');
});
```
> También puede utilizar expresiones útiles-regulares si tiene limitaciones muy específicas, 
por ejemplo, lo siguiente sería igualar "GET / cometa / 71dbb9c", así como "GET /commits/71dbb9c..4c084f9".

> ```javascript
router.get(/^\/commits\/(\w+)(?:\.\.(\w+))?$/, function(req, res){
  var from = req.params[0];
  var to = req.params[1] || 'HEAD';
  res.send('commit range ' + from + '..' + to);
});
```

> ***
> ###**router.param (nombre, param_middleware)**

> Asigna el parámetro de ruta especificada namea un middleware especializado param-captura.Esta función coloca el middleware en la
misma pila que .use. Agrega devolución de llamada activa a parámetros de la ruta, donde namees el nombre del parámetro y callbackes 
la función de devolución de llamada. Aunque nametécnicamente es opcional, utilizando este método sin ella está en desuso empezando 
con expreso v4.11.0.
Los parámetros de la función de devolución de llamada son:
* req, La solicitud de objeto.
* res, El objeto respuesta.
* next, Lo que indica la siguiente función de middleware.
* El valor del nameparámetro.
* El nombre del parámetro.

> Asignación de parámetro se utiliza para proporcionar las condiciones previas a las rutas que utilizan marcadores 
de posición normalizados. Por ejemplo, un : user_id parámetro podría cargar automáticamente la información de un usuario de la base de 
datos sin ningún código adicional:

> ```javascript
router.param('user', function(req, res, next, id) {
  // try to get the user details from the User model and attach it to the request object
  User.find(id, function(err, user) {
    if (err) {
      next(err);
    } else if (user) {
      req.user = user;
      next();
    } else {
      next(new Error('failed to load user'));
    }
  });
});
```

> Param funciones de devolución de llamada son locales al router en el que están definidas. Ellos no son heredados por aplicaciones o
routers montados. Por lo tanto, las devoluciones de llamada param definidos en routerse activarán solamente por parámetros de ruta 
definidos en routerlas rutas. Una devolución de llamada param será llamado sólo una vez en un ciclo de petición-respuesta, incluso si 
el parámetro se corresponde en múltiples rutas, como se muestra en los siguientes ejemplos.

> ```javascript
router.param('id', function (req, res, next, id) {
  console.log('CALLED ONLY ONCE');
  next();
});
router.get('/user/:id', function (req, res, next) {
  console.log('although this matches');
  next();
});
router.get('/user/:id', function (req, res) {
  console.log('and this matches too');
  res.end();
});
```

> En GET /user/42, se imprime la siguiente:

> ```
CALLED ONLY ONCE
although this matches
and this matches too
 ```
 
> ***
> ### **router.route (ruta)**

> Devuelve una instancia de una sola ruta que luego se puede utilizar para manejar
los verbos HTTP con el middleware opcional. Utilizar router.route()para evitar la nomenclatura 
ruta duplicada y por lo tanto los errores de escritura. Basándose en el router.param()ejemplo 
anterior, el código siguiente muestra cómo utilizar  router.route()para especificar varios manipuladores método HTTP.

> ```javascript
var router = express.Router();
router.param('user_id', function(req, res, next, id) {
  // sample user, would actually fetch from DB, etc...
  req.user = {
    id: id,
    name: 'TJ'
  };
  next();
});
router.route('/users/:user_id')
.all(function(req, res, next) {
  // runs for all HTTP verbs first
  // think of it as route specific middleware!
  next();
})
.get(function(req, res, next) {
  res.json(req.user);
})
.put(function(req, res, next) {
  // just an example of maybe updating the user
  req.user.name = req.params.name;
  // save user ... etc
  res.json(req.user);
})
.post(function(req, res, next) {
  next(new Error('not implemented'));
})
.delete(function(req, res, next) {
  next(new Error('not implemented'));
});
```

> Utiliza la función especificada middleware o funciones, con la ruta de montaje 
  opcional path, que por defecto es "/". Este método es similar a app.use () . 
  Un ejemplo sencillo y el uso caso se describe a continuación. Ver app.use () para 
  obtener más información. Middleware es como un tubo de fontanería: peticiones 
  comienzan a partir de la primera función de middleware definido y se abren 
  camino a la transformación pila de middleware "hacia abajo" para cada ruta que coinciden.
  
> ```javascript
var express = require('express');
var app = express();
var router = express.Router();
// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});
// this will only be invoked if the path starts with /bar from the mount point
router.use('/bar', function(req, res, next) {
  // ... maybe some additional /bar logging ...
  next();
});
// always invoked
router.use(function(req, res, next) {
  res.send('Hello World');
});
app.use('/foo', router);
app.listen(3000);
```

> El orden en el que se define con el middleware router.use()es muy importante. 
Se invocan de forma secuencial, por tanto, el orden de precedencia define middleware.Por 
ejemplo, por lo general un registrador es el primer middleware que utilizaría, por lo que
cada solicitud se registra.

> ```javascript
var logger = require('morgan');
router.use(logger());
router.use(express.static(__dirname + '/public'));
router.use(function(req, res){
  res.send('Hello');
});
```

> Ahora suponga que desea ignorar las solicitudes de registro de archivos estáticos, pero 
para seguir las rutas de registro y middleware definidos después logger(). Sólo tendría 
que mover la llamada a express.static()la parte superior, antes de añadir el middleware 
registrador:

> ```javascript
router.use(express.static(__dirname + '/public'));
router.use(logger());
router.use(function(req, res){
  res.send('Hello');
});
```
> Otro ejemplo está sirviendo archivos de varios directorios, dando prioridad a "./public" sobre los demás:

> ```javascript
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/files'));
app.use(express.static(__dirname + '/uploads'));
```

> El router.use()método también es compatible con los parámetros nombrado para que 
sus puntos de montaje para otros routers pueden beneficiarse de precarga utilizando los parámetros con nombre.