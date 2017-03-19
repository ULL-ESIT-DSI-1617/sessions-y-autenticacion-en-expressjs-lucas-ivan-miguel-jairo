
> ## Introducción

> En la World Wide Web , una query string es la parte de un localizador uniforme de recursos (URL) 
que contiene datos que no encaja convenientemente en una estructura jerárquica de la ruta. La cadena de
consulta incluye campos añadidos comúnmente a una URL base mediante un navegador Web u otra aplicación cliente, 
por ejemplo, como parte de un formulario HTML.


> ## Estructura

> Una URL típica que contiene una cadena de consulta es la siguiente:

> ```
http://example.com/over/there?name=ferret
```

> Cuando un servidor recibe una solicitud de una página tal, puede ejecutar 
un programa, pasando la cadena de consulta, que en este caso es, name=ferret sin
cambios, al programa. El primer signo de interrogación se utiliza como separador,
y no es parte de la cadena de consulta.

> Un enlace en una página web puede tener una dirección URL que contiene una cadena 
de consulta. HTML define tres formas en que un agente de usuario puede generar la 
cadena de consulta:

> *un formulario HTML a través del ```<form>...</form>```*

> *elemento un mapa de imagen  del servidor a través del  ismapatributo en el ```<img>``` *
> *elemento con una ```<imgismap>```construcción de búsqueda indexada que está en desuso ```<isindex>```*

> ## Formulario HTML

> Cuando un formulario contiene los campos field1, field2, field3, el 
contenido de los campos se codifica como una cadena de consulta de la 
siguiente manera:

> ```
field1=value1&field2=value2&field3=value3
``` 

> La cadena de consulta se compone de una serie de pares de campos de valor.
Dentro de cada par, el nombre del campo y el valor están separados por un 
signo de igual , ' ='.
La serie de pares se separa por el símbolo de unión , ' &' (o punto y coma , ' ;' 
para las URL incrustadas en HTML y no generados por una ```<form>...</form>```
Aunque no existe una norma definitiva, la mayoría de los marcos de web permiten múltiples 
valores a estar asociados con un solo campo (por ejemplo field1=value1&field1=value2&field2=value3)


> ## Ejemplo

> Si un formulario está incrustado en un HTML página de la siguiente manera:
```
<form action="cgi-bin/test.cgi" method="get">
  <input type="text" name="first" />
  <input type="text" name="second" />
  <input type="submit" />
</form>
```
y el usuario inserta las cadenas “this is a field” y “was it clear (already)?” en los dos campos de texto 
y presiona el botón de enviar, el programa test.cgi(el programa especificado por el atributo action del 
formulario en el ejemplo anterior)
recibirá la siguiente cadena de consulta:
```
first=this+is+a+field&second=was+it+clear+%28already%29%3F
```

> Si el formulario se procesa en el servidor por un CGI script de , el guión puede recibir normalmente la cadena
> de consulta como una variable de entorno llamada QUERY_STRING.

> ## Seguimiento

> Un programa que recibe una cadena de consulta puede ignorar la totalidad o parte de la misma. Si la URL solicitada corresponde a un 
archivo y no a un programa, toda la cadena de consulta se ignora. Sin embargo, independientemente de si se utiliza la cadena de consulta 
o no, toda la URL incluyendo éste se almacena en el servidor de archivos de registro .

> Estos hechos permiten que las cadenas de consulta que se utilizan para realizar un seguimiento de los usuarios de una manera similar a
la proporcionada por cookies HTTP . Para que esto funcione, cada vez que el usuario descarga una página, un identificador único debe ser 
elegido y se agrega como una cadena de consulta a las direcciones URL de todos los enlaces de la página contiene. Tan pronto como el usuario
siga uno de estos enlaces, se solicita la URL correspondiente al servidor. De esta manera, la descarga de esta página está vinculada con la anterior.

> Por ejemplo, cuando se solicita una página web que contiene lo siguiente:
```
 < Un  href = "foo.html" > ver a mi página! </ A > 
 < un  href = "bar.html" > la mía es mejor </ a >
```
una cadena única, tal como e0a72cb2a2c7se elige, y la página se modifica de la siguiente manera:

> ```
 < Un  href = "foo.html? E0a72cb2a2c7" > ver a mi página! </ A > 
 < un  href = "bar.html? E0a72cb2a2c7" > la mía es mejor </ a >
```

> La adición de la cadena de consulta no cambia la forma en que la página se muestra al usuario. 
Cuando el usuario sigue, por ejemplo, el primer enlace, el navegador solicita la página foo.html?e0a72cb2a2c7al servidor,
que ignora lo que sigue ?y envía la página foo.htmlcomo se esperaba, la adición de la cadena de consulta para sus enlaces también.

> De esta manera, cualquier solicitud de página posterior de este usuario llevará a la misma cadena de consulta e0a72cb2a2c7, 
por lo que es posible establecer que todas estas páginas han sido vistos por el mismo usuario. Las cadenas de consulta se utilizan
a menudo en asociación con contadores de visitantes .

> Las principales diferencias entre las cadenas de consulta utilizados para el seguimiento y cookies HTTP son las siguientes:

> Las cadenas de consulta forman parte de la URL, y por lo tanto se incluyen si el usuario guarda o envía la URL a otro usuario; las 
cookies pueden ser mantenidos a través de sesiones de navegación, pero no se guardan o se envían a la URL.
Si el usuario llega al mismo servidor web por dos (o más) caminos independientes, se le asignará dos cadenas de consulta diferentes, 
mientras que las cookies almacenadas son los mismos.
El usuario puede desactivar las cookies, en cuyo caso el uso de cookies para el seguimiento no funciona. Sin embargo, utilizando las 
cadenas de consulta para el seguimiento deben trabajar en todas las situaciones.
Diferentes cadenas de consulta aprobadas por diferentes visitas a la página significarán que las páginas no se sirven desde el navegador
(o proxy, si está presente) caché aumenta la carga en el servidor web y ralentizar la experiencia del usuario.

