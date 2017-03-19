## Directivas
> La estructura de una cookie es: <cookie-name>=<cookie-value> ,algunos ejemplos son :
> ```javascript
> . Una <cookie-name> : Puede ser cualquier valor pero no puede contener caracteres especiales como () <> @,; : \ "/ [] = {}?.
> . Un <cookie-value> : Una cookie valor puede contener caracteres ascci
> . __Secure-prefijo : Es una cookie que comienza por _secure y tiene que ser https
> . __Host-prefijo : con prefijo _host y tiene que ser segura
```
> Otra de las directivas es Expira = <fecha> : Este tipo de directiva fija la caducidad de la cookie en si
> Max-age = <distinto de cero dígitos> : Se fija el numero de segundos hasta que la cookie expire
> Domain = <dominio-valor> : Indica el dominia al que se le envia la cookie
> Path = <ruta-valor> : Se indica la ruta del recurso solicitado
> Asegure : La cookie segura se envia por ssl y https
> HttpOnly : La cookie no es accesible desde javascript para prevenir ataques contra cross-site scripting ( XSS ).
> SameSite = estricta o SameSite = Lax : Permite a los servidores afirman que una cookie no debería ser enviado junto con peticiones de dominio cruzado, que proporciona cierta protección contra ataques entre sitios de falsificación de petición ( CSRF ).
