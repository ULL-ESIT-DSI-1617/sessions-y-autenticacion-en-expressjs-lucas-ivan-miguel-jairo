> ###Utilización en el github

> ####**Fichero package.json**
  En este archivos ponemro toda la informacion nesearia para que nuestro
  proyecto pueda funciona. Ya qeu para si queremos hacer participe de un
  grupo grande de personas de nuestro proyecto pues aqui se pondra gran parte
  de infomracion relevante representada por atributos, a continuacion explicare
  los mas importante:
  
> * **name :** Aquí ponemos el nombre del proyecto.
* **versión :**  Aquí ponemos la versión.
* **Descripción :** Breve descripción del proyecto.
* **scripts :** Donde hay procesos automatizado para el correcta organización del sistema.
* **repositorio :** Especificar el lugar donde vive su código.Esto es útil para las personas que quieran contribuir.
* **dependencias :** Son programas que necesitas para realizar el proyecto.
* **devDependencies :** Son las versiones de los programas que se instalara cuando ponemos npm install.

> El siugiente cuadro es un ejemplo de un archivo json con mas atributos que lo ya 
explicado. Si deceas ver mas informacion pincha [aqui](https://docs.npmjs.com/files/package.json)

> ```json
{
  "name" : "nombre-módulo" , 
  "versión" : "10.3.1" , 
  "Descripción" : "Un módulo de ejemplo para ilustrar el uso de un package.json" , 
  "autor" : "Su nombre <you.name @ example.org> " , 
  " contribuyentes " : [{
   " name " : " Foo Bar " ,
   " e-mail " : " foo.bar@example.com " 
}], 
  " bin " : {
   " nombre-módulo " : " ./bin/module-name " 
}, 
  " scripts " : { 
    " prueba " : " los votos --isolate --spec " , 
    " Inicio " : " index.js de estación " , 
    " predeploy " : " eco im punto de desplegar " , 
    " postdeploy " : " echo he desplegado " , 
    " prepublish " : " café --bare --compile --output lib / foo src / foo / * café ".
  },
  "principal" : "lib / foo.js" , 
  "repositorio" : {
   "tipo" : "git" ,
   "url" : "https://github.com/nodejitsu/browsenpm.org" 
}, 
  "errores" : {
   "url" : "https://github.com/nodejitsu/browsenpm.org/issues" 
}, 
  "palabras clave" : [
   "nodejitsu" ,
   "ejemplo" ,
   "browsenpm" 
], 
  "dependencias" : { 
    "primus" : "*" , 
    "asincrónico" : "~ 0.8.0" , 
    "expresar" : "4.2.x" , 
    "Winston" : "git: //github.com/flatiron/winston#master" , 
    "bigpipe" : "bigpipe / pagelet" , 
    "placas" : "https://github.com/flatiron/plates/tarball/master"
  },
  "devDependencies ": { 
    "votos": "^ 0.7.0" , 
    "asumir" : "<1.0.0 ||> = 2.3.1 <2.4.5 ||> = 2.5.2 <3.0.0" , 
    " pre-commit " : " * "
  },
  "preferGlobal" : verdad , 
  "privado" : verdad , 
  "publishConfig": {
   "Registro ": "https://your-private-hosted-npm.registry.nodejitsu.com" 
}, 
  "subdominio" : "foobar" , 
  "analizar" : verdad , 
  "licencia": "MIT"
}
```
```
**Nota:**Para crear este archivo en nuestro proyecto utlizamos el siguiente comando.
   $ npm init
```
> ####**Fichero book.json**
Este fichero permite configurar permite personalizar su libro utilizando una configuración flexible.
    
> ####**Configuración**
Algunos atributos para la configuracion son los siguiente.
* **title (string):** Título de la publicación.
* **author (array):** Autor/es de la publicación. Persona/s generadoras de los contenidos independientemente del formato. Un string con el nombre de cada autor diferente.
* **creator (array):** Creador/es de la publicación. Persona/s creadoras de la publicación en CHPub. Un string con el nombre de cada creador diferente.
* **editor (string):** Nombre del editor de la publicación.
* **date (string):** Fecha de la publicación en formato YYYY-MM-DD.
* **url (string):** URL de la publicación o de la editorial.
* **description (string):** Descripción de la publicación.
* **keywords (string):** Palabras clave relacionadas con la publicación.
* **contents (array):** Lista de todos los ficheros de apartados de la publicación en el orden de visualización. utilizacrcio nd e creqado de tabal http://www.tablesgenerator.com

> También podemos poner plugin para automatizar o hacer que se vea cosa a nuestro gusto
> Siguiente cuadro es una archivo de ejemplo de nueestro ahrchivo book.
> 

> Ejemplo de la ultilizaicon de plugin que se han puesto
```json
{
  "root": "txt",
  "gitbook": ">=3.0.0",
  "plugins": ["emphasize", "bootstrap-callout","page-toc" ]
}
```
> Plugins se instalan automáticamente en GitBook.com . A nivel local, ejecutar 
**gitbook install** para instalar y preparar todos los plugins para sus libros.

> Ejemplo de ultilización de los plugin



[ "bootstrap-callout" ]

> #### Title
>
> Content

type
> #### type::Title
>
> Content

primary
> #### primary::Title
>       
> 

success
> #### success::Title
> 
> 

danger
> #### danger::Title
>
>

warning
> #### warning::Title
>
>

info
> #### info::Title
>
>