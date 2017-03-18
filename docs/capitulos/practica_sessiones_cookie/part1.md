## Insercion de datos en Json

> Primero se comprueba que el usuario este en la base de datos y segundo se mira que las dos contraseñas insertadas sean iguales.
> Para la insercion de datos en un Json se guarda en una variable el JSON y por medio del objeto asignamos la nueva contraseña del body al usuario
> para escribir en disco se utilza la clase FS y se le pasa el metodo writefile para poder escribir en el json.
> A continuación podemos ver el codigo de la explicación

> ```javascript
app.post('/reg', function (req, res) {
var obj = require('./users.json');
 if(req.body.password == req.body.password2 && !(req.body.username in users) )
  {
        obj[req.body.username] = bcrypt.hashSync(req.body.password, salt);
        console.log("Mi objeto "+ obj);
        fs.writeFile('./users.json', JSON.stringify(obj,"",4), function (err) {
                console.log(err);
        });
    console.log('User registred');
   res.render('login');
  }
   else
    res.render('registro', {message: 'Registro incorrecto'});
  // res.send('User registred');
});
```
> En este imagen podemos ver la interfaz grafica del home
>
> ![](/imagenes/practica_sessiones_cookie/home.png)
>
> En este imagen podemos ver la interfaz grafica de registrarse
>
> ![](/imagenes/practica_sessiones_cookie/registro.png)