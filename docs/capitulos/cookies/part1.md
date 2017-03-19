## Cookies HTTP

> ### ¿Qué es?
> Una de cookies HTTP (cookies web, búsqueda cookie) en español llamada galleta
Una galleta, galleta informática o cookie es una pequeña información enviada 
por un sitio web o el servidor donde esta la web y almacenada en el navegador del
usuario, de manera que el sitio web puede consultar la actividad previa del usuario.
Por lo general, se utiliza para saber si dos solicitudes provenían del mismo 
navegador que permite mantener un usuario ha iniciado sesión en, por ejemplo. Se 
recuerda la información de estado para el protocolo HTTP sin estado.

> ### Principales funciones.

> * Llevar el control de usuarios: cuando un usuario introduce su nombre de usuario 
y contraseña, se almacena una galleta para que no tenga que estar introduciéndolas 
para cada página del servidor. 
* Conseguir información sobre los hábitos de navegación del usuario, e intentos 
de spyware (programas espía), por parte de agencias de publicidad y otros. 
Esto puede causar problemas de privacidad y es una de las razones por la que las
cookies tienen sus detractores.

> ### La creación de las Cookies
Cuando se recibe una petición HTTP, un servidor puede enviar una Set-Cookiecabecera 
con la respuesta. La cookie se almacena generalmente por el navegador y, después, 
el valor de la cookie se envía junto con cada solicitud realizada al mismo servidor 
que el contenido de una Cookiecabecera HTTP. Además, un retraso de caducidad se puede especificar,
así como la restricción de un dominio y una ruta específica, lo que limita cuánto tiempo
y en qué sitio de la cookie se envía a.

> ### Tipos de Cookies

> * **Cookies de sesión** - son archivos de cookies temporales, que se borran cuando cierras el navegador.
Cuando reinicias el navegador y vuelves al sitio que creó la cookie, la página web no te reconocerá. 
Tendrás que volver a iniciar sesión (si es necesario hacerlo) o seleccionar tus preferencias y temas 
de nuevo si el sitio utiliza esas funciones.
Una cookie de sesión nueva se generará y almacenará tu información de navegación,
permaneciendo activa hasta que abandones la página y cierres el navegador. Más sobre las cookies de sesión.
* **Cookies permanentes** - Las cookies permanentes ayudan a los sitios web a recordar tu información y ajustes
cuando los visitas más adelante. Esto conlleva un acceso más rápido y sencillo ya que, por ejemplo,
no tienes que iniciar sesión de nuevo. Además de la autentificación, otras páginas web tienen más 
funciones para las cookies permanentes, como: selección de idioma, selección de tema, preferencias
de menú, marcapáginas internos de la web, o favoritos, entre otros. En tu primera visita, la página
aparecerá con la configuración por defecto. Durante tu visita, tú eliges tus preferencias y éstas
son recordadas, mediante el uso de la cookie permanente, la próxima vez que la visites.


> **Seguridad** Una cookie seguro sólo será enviado al servidor cuando se realiza una solicitud utilizando 
SSL y el protocolo HTTPS. Sin embargo, tenga en cuenta que la información confidencial o 
sensible debe no ser almacenada o transmitida de cookies HTTP como todo el mecanismo es
inherentemente inseguro y esta bandera no se ofrecerá ningún tipo de cifrado o seguridad adicional. 
A partir de Chrome 52 y Firefox 52, sitios inseguros ( http:) no puede establecer cookies con la " secureDirectiva" más.
