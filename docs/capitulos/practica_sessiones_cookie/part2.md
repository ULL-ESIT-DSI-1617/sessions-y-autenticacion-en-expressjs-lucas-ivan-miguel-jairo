## Modificar Contraseña del Json

> Para actualizar el password de usuario
> Primero, comprobamos que existan datos en el body
> Segundo, agregamos en una variable el JSON 
> Tercero , agregamos la nueva contraseña al usuario de manera encriptada

> ```javascript
//Actualizar el password del usuario.
app.post('/act', function (req, res)
{
    if (!req.body.username || !req.body.password) 
  {
        console.log('failed update');
        res.send('failed update');
  } 
    else if(req.body.username in users  &&
            bcrypt.compareSync( req.body.password, users[req.body.username])) 
  {
            req.session.user = req.body.username;
            console.log(req.session.user + "muestrsl");
            req.session.admin = true;
            var obj = require('./users.json');
            obj[req.body.username] = bcrypt.hashSync(req.body.newpassword, salt);
            console.log("Este es mi nuevo password : " + req.body.username);
              res.render('login',{message: 'Actualizado la contraseña' });
  } 
  else 
  {
    console.log(`Update ${util.inspect(req.query)} failed`);
    //res.send(layout(`login ${util.inspect(req.query)} failed. You are ${req.session.user || 'not logged'}`));
  }
      });
```

> En la siguiente imagen podemos ver una captura del formulario de actualizacion de contraseña
>
> ![](/imagenes/practica_sessiones_cookie/actualizar.png)

