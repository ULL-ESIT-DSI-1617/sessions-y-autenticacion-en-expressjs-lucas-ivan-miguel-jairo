> ### Descripción Fichero Gulpfile

>*	Dependencia  
Dependencia para llamar a gulp  
> var gulp = require("gulp");  
Dependencia para llamar al método shell  
> var shell = require('gulp-shell');  
Dependencia para llamar al plugin ghpages  
> var ghPages = require('gulp-gh-pages');  
*	Tareas  
Se llama al plugin gh-pages y se hace un recorrido en profundida (/**/*) para construir las gh-pages (simplifica el proceso de despliegue de gh-pages) es decir  Todos los archivos y directorios dentro de / gh-pages  serán enviados a la rama gh-pages aunque podría ser cambiada a master  
> gulp.task('gh-pages', function() {  
>   return gulp.src('./gh-pages/**/*')  
>   .pipe(ghPages());  
> });  

> Tarea que se utiliza para construir el libro por media de línea de comandos con los comandos de boilerplate (# npm run generate-gitbook && npm run generate-wiki)  

> gulp.task('build',shell.task([  
> 'npm run build'  
> ]));  

> Tarea que se utiliza para desplegar el libro por media de línea de comandos con los comandos de boilerplate (# npm run deploy-gitbook && npm run deploy-wiki)  

> gulp.task('deploy',shell.task([  
>   'npm run deploy'  
> ]));  

> Tarea que se utiliza para montar el servidor de prueba del libro  por media de línea de comandos  
> gulp.task('serve',shell.task([  
>   'gitbook serve'  
> ]));  
Tarea por defecto donde se ejecutará el deploy y el build solamente  
> gulp.task('default', [ 'deploy','build' ]);
