## Gulpfile

> ### Introduction Gulpfile
El gulpfile es donde se guardan las tareas que se van a llevar a cabo de un proyecto.
El fichero gulpfile se divide en dos partes bien diferenciadas
* Dependencias: donde se llamaran a los plugin que van a ser utilizados para llevar a cabo acciones.
Un ejemplo de dependencia puede ser:
var gulp = require('gulp');
* Tareas: Aquí pondremos cada tarea la cual tendrá una estructura común.

> gulp.task('nombre de la tarea', function() {
>  // código de la tarea por defecto
> });
Donde task es un ejemplo de método que puede ser utilizado.



