> ## Middleware de gestión de errores
> Para la gestion de errores sera necesario pasarle al middleware 4 parametros en vez de dos o tres como se muestra a continuacion
> (err, req, res, next)):
> un ejemplo para realizar una traza de errores seria :
> como se puede ver en el ejemplo se le pasa el metodo status(500)

> ```javascript
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})>
```