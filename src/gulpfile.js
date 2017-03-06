var gulp = require('gulp');



gulp.task('prueba1', function(){
	require('./routing_guide/appall.js');
});

gulp.task('prueba2', function(){
	require('./routing_guide/manejadores.js');
});

gulp.task('prueba3', function(){
	require('./routing_guide/vias-acceso-ruta.js');
});


