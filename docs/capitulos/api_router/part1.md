## Router

> ### ¿Que es?

> Un routerobjeto es una instancia aislada de middleware y rutas. Usted puede pensar en 
él como un "mini-aplicación," sólo capaz de realizar funciones de middleware y de instalación.
Cada aplicación Express tiene un router aplicación incorporada.
Un router se comporta como middleware en sí, por lo que se puede utilizar como argumento para app.use () o 
como el argumento del otro router () el uso del método.El alto nivel de expressobjeto tiene un router ()
método que crea un nuevo routerobjeto. Una vez que haya creado un objeto router, se puede añadir middleware y
el método HTTP vías (por ejemplo get, put, post, etc.) para que al igual que una aplicación. Por ejemplo:

> ```
// invoked for any requests passed to this router
router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  next();
});
// will handle any request that ends in /events
// depends on where the router is "use()'d"
router.get('/events', function(req, res, next) {
  // ..
});
```

> A continuación, puede utilizar un router para una dirección URL determinada raíz de esta manera 
la separación de sus rutas en archivos o incluso mini-aplicaciones.
 
> ``` 
// only requests to /calendar/* will be sent to our "router"
     app.use('/calendar', router); 
```



