## El uso de middleware
> ### Introduccion
> Los Middleware son pequeños servicios que van llamandose de manera encadenada para cumplir un servicio en concreto
> Los Middleware tienen acceso a diferentes variables de un codigo en express
* Acceso a la peticion (request)
* Acceso a la respuesta (response)
* Acceso a la variable next que se encarga de llamar al siguiente middleware (servicio)
> Las tareas que puede realizar un middleware son:
* No ejecutar código
* Realizar cambios en el objeto respuesta
* Acabar con el proceso peticion y respuesta
* Llamar a la siguiente función de middleware en la pila.
