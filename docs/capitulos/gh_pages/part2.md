> ###  Utilización
> #### Hay diferentes opciones
> ##### Opción 1
> ***1. Crear un archivo index***
    Dentro de github.com creamos  un nuevo repositorio o vamos a uno ya existente. hacemos click en *Create a new file*. 

> ***2. Escribimos el contenido del archivo***
    Debemos llamar a dicho archivo *index.html*. Escribimos codigo HTML en él.

> ***3. Escribimos el commit del archivo***
    Bajamos hasta la parte baja de la pagina, escribimos un mensaje de commit y hacemos click en *Commit new file*.

> ***4. Configuración del repositorio***
    En la pestaña *Settings* vamos a la sección GitHub Pages, seleccionamos la rama master como fuente y guardamos.

> ***5. Y hemos acabado***
    Si escribimos en un navegador  la dirección 
    *http://nombredeusuario.github.io/repositorio* tendremos la pagina web de nuestro proyecto.
    [](https://ull-esit-dsi-1617.github.io/tareas-iniciales-jairo-lucas-ivan/)
> ##### Opción 2

> ***1. Crear una nueva rama en consola ```bash git checkout -b gh-pages```*** 

> ***2. Borrar los archivos innecesarios,dejar solo los que aparecen en el directorio  _book***

> ***3. Subimos los cambios a Github y escribimos en el navegador la dirección *http://nombredeusuario.github.io/repositorio* tendremos la pagina web de nuestro proyecto.***

> ##### Opción 3

> ***1. Instalar el paquete npm de gh-pages***

> ***2. Crear el fichero deploy.js y escribir lo siguiente***

> ```javascript
var ghpages = require('gh-pages');
var path = require('path');
ghpages.publish(path.join(__dirname, '_book'), function(err) { 
    console.log("exito"); 
});
```
> ***3. Cada vez que se quiera actualizar y publicar la gh-pages se escribe en linea
de comandos lo siguiente***

> ```bash 
 node deploy.js
```
