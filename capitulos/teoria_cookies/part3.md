## Ejemplos

> Cookie de sesión : Este tipo de cookie se elimina cuando el equipo se apaga
> ```javascript
Set-Cookie: sessionid=38afes7a8; httponly; Path=/
```
> Cookie permanente : Al contrario de las cookie anterior esta cookie expira segun una fecha que se haya fijado
> ```javascript
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```
> Cookie de terceros : Las cookie de tercero no pertenecen al dominio que visitas sino forma parte de otros dominios y son generalemente publicidad
> ```javascript
Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk; Path=/; Expires=Wed, 30 Aug 2019 00:00:00 GMT
```
> Prefijos de galletas : Los prefijos __Secure y __Host solo podrán ser utilizada con la directiva secure
> ```javascript
// Both accepted when from a secure origin (HTTPS)
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/
// Rejected due to missing Secure directive
Set-Cookie: __Secure-id=1
// Rejected due to the missing Path=/ directive (unless at root of the site)
Set-Cookie: __Host-id=1; Secure
// Rejected due to setting a domain
Set-Cookie: __Host-id=1; Secure; Path=/; domain=example.com
```