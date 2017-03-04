### Basic Routing

> Enrutamiento se refiere a determinar cómo una aplicación 
responde a una solicitud de cliente a un extremo determinado,
que es un URI (o ruta) y un método de solicitud HTTP específico (GET, POST, etc.).
Cada ruta puede tener una o más funciones del manejador, que se ejecutan cuando la ruta se corresponde.

La estructura de como de define una ruta es la siguiente:

*app.METHOD(PATH, HANDLER)*

**App es una instancia de express.**
    
```javascript
        var app = express()
```
        
**METHOD es un método de solicitud HTTP, en minúsculas.**
    
**PATH es una ruta de acceso en el servidor.**
    
**HANDLER es la función ejecutada cuando se compara la ruta.**
    
## Ejemplos Basic Routing

 A continuación de ofrecen varios ejemplos de como se realizan las rutas 
con diferentes ejemplos:

**Responde con un !Hello World! en la página principal**
```javascript
app.get('/', function (req, res) {
  res.send('Hello World!')
})
```
**Responder a la solicitud POST en la ruta raíz (/), la página de inicio de la aplicación**
```javascript
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
```

**Responder a una petición PUT a la ruta / user**
```javascript
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
```

**Responde a una solicitud DELETE a la ruta / user**
```javascript
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
```

