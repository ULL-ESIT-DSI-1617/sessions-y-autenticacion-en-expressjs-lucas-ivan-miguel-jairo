## Cookie Parser

> ### cookie.parse (str, opciones)**

> Analizar un HTTP Cookiecadena de encabezado y devolver un objeto de todos 
los pares de nombre y valor de cookie. El argumento str es la cadena que 
representa un valor de Cookie de encabezado y el argumento opciones contiene
opciones de análisis adicionales.

> ```javascript
var cookies = cookie.parse('foo=bar; equation=E%3Dmc%5E2');
// { foo: 'bar', equation: 'E=mc^2' }
```
> ### Opciones

> ```cookie.parse``` acepta estas propiedades en el objeto de opciones.

> ### decode

> Especifica una función que se usa para decodificar el valor de una cookie. 
Dado que el valor de una cookie tiene un conjunto limitado de caracteres 
(y debe ser una cadena sencilla), esta función puede ser usada para decodificar 
un valor de cookie codificada previamente en una cadena de JavaScript u otro objeto.

> La función por defecto es ```decodeURIComponent```, que descodificar cualquier
secuencia de codificación URL en sus representaciones de bytes.

> En caso de omisión de algún valor,si se emite un error de esta función,
el valor original, no decodificado cookie se devuelve como el valor de la cookie.

> **cookie.serialize (name, value, options)**

> Serializar un par nombre-valor de la cookie en una Set-Cookie del string de encabezado. 
El argumento name es el nombre de la cookie,value es el argumento para establecer
la cookie, y el options  es un objeto opcional que contiene opciones adicionales de serialización.

> ```javascript
var setCookie = cookie.serialize('foo', 'bar');
// foo=bar 
```
> ### Options

> *cookie.serialize* acepta estas propiedades en el objeto de opciones.

> ### domain

> Especifica el valor del atributo DomainSet-Cookie. De forma predeterminada, 
se establece ningún dominio, y la mayoría de los clientes tendrá en cuenta la
cookie para aplicar a sólo el dominio actual.

> ### encode

> Especifica una función que se usa para codificar el valor de una cookie. Ya 
que el valor de una cookie tiene un conjunto limitado de caracteres (y debe 
ser una cadena sencilla), esta función puede ser utilizada para codificar un
valor en una cadena adecuada para el valor de una cookie.

> La función por defecto es el mundial `ecodeURIComponent`, que codificarán una 
cadena JavaScript en UTF-8 secuencias de bytes y luego cifrar la URL de cualquier 
forma que quede fuera del rango de las cookies.

> ### expires

> Especifica el objeto Date a ser el valor del atributo Expires Set-Cookie . De forma
predeterminada, sin caducidad se establece, y la mayoría de los clientes va a considerar
esto como un "cookie no persistente" y se eliminará en una condición como la salida de 
una aplicación de navegador web.

> Tenga en cuenta las especificaciones del modelo de almacenamiento de cookies estados
que si ambos `expires` y `magAgeestán` están establecidos, `maxAge` tiene prioridad.


> ### MaxAge

> Especifica el número(en segundos) que es el valor para el atributo`Max-Age Set-Cookie` . 
El número dado se convertirá a un entero redondeando hacia abajo. De manera 
predeterminada, no se establece ningún límite de edad.

> Tenga en cuenta las especificaciones del modelo de almacenamiento de cookies estados 
que si ambos expiresy magAgeestán establecidos, se maxAgetiene prioridad, pero no es
possiblke todos los clientes por obedecer este, por lo que si ambos están establecidos,
se debe apuntar a la misma fecha y hora.

> ### path

> Especifica el valor del atributo `Path Set-Cookie`. De forma predeterminada, la ruta es
considerada como la "ruta por defecto" . De forma predeterminada, hay una edad máxima
se fija, y la mayoría de los clientes va a considerar esto como un "cookie no 
persistente" y se eliminará en una condición como la salida de una aplicación de
navegador web.

> ### sameSite

> Especifica el booleano stringsea el valor del atributo `SameSite Set-Cookie` .

>    *True establecerá el atributo SameSite en Strict para la estricta aplicación del mismo sitio.*    

>    *false no va a establecer el SameSiteatributo.*

>    *'Lax' establecerá el atributo de SameSite a Lax para la aplicación del mismo sitio laxa.*

>    *Strict' establecerá el atributo SameSite en Strict para la estricta aplicación del mismo sitio.*

