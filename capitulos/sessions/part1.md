## Sesiones en expressJS

> El proceso de **autenticación** verifica si un usuario es quien ha declarado ser.

> El proceso de **autorización** comprueba que un usuario tiene los privilegios adecuados para acceder a los recursos que ha solicitado.

> El siguiente código muestra un **ejemplo de autenticación y autorización usando expressJS**:

```javascript
var express = require('express'),
    app = express(),
    session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user === "amy" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};

// Login endpoint
app.get('/login', function (req, res) {
  if (!req.query.username || !req.query.password) {
    res.send('login failed');    
  } else if(req.query.username === "amy" || req.query.password === "amyspassword") {
    req.session.user = "amy";
    req.session.admin = true;
    res.send("login success!");
  }
});

// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});

// Get content endpoint
app.get('/content', auth, function (req, res) {
    res.send("You can only see this after you've logged in.");
});

app.listen(3000);
console.log("app running at http://localhost:3000");
```
> Para ejecutar el código anterior escribimos lo siguiente en la terminal:

```
npm install express
npm install express-session
node session_auth.js &
```
> Ahora visitamos las siguientes URL's en el navegador:


> * localhost:3000/login?username=amy&password=amyspassword
> * localhost:3000/content
> * localhost:3000/logout

> #### Ejecución

> * /login

> ```javascript
// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user === "amy" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};
```

> En este caso nos dará login fallido ya que no hemos especificado nombre de usuario ni contraseña.

> ![](../../imagenes/sessions/login-failed)

> En cambio, si utilizamos el login y contraseña adecuados:

> ![](../../imagenes/sessions/login-success.png)

> * /content

> ```javascript
// Get content endpoint
app.get('/content', auth, function (req, res) {
    res.send("You can only see this after you've logged in.");
});
```

> Al acceder a /content vemos lo siguiente:

> ![](../../imagenes/sessions/content.png)

> * /logout

> ```javascript
// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});
```
> Al acceder a /logout vemos lo siguiente:

> ![](../../imagenes/sessions/logout.png)
