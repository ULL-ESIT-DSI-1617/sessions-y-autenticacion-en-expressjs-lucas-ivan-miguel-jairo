> ## Built-in middleware
> Con la version 4.x.x se express los modulos de middleware de terceros son tratados como modulos separados , ya no se depende de connect como
> ocurria antiguamente excepto el modulo

> ```javascript
express.static(root, [options])
```
> un ejemplo de uso de express.static es el siguiente:

> ```javascript
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}
app.use(express.static('public', options))
```
> Es posible tener mas de un directorio estatico como se muestra a continuacion

> ```javascript
app.use(express.static('public'))
app.use(express.static('uploads'))
app.use(express.static('files'))
```