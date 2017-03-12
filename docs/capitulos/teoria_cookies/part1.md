## Sintaxis
> Las set cookies se utilizan para enviar el encabezado desde el servidor al agente de usuario
> Algunos ejemplos de sintaxis que tendran estas cabeceras son:  
> ```javascript
Set-Cookie: <galleta-name> = <galleta-valor> 
Set-Cookie: <galleta-name> = <galleta-valor>; Expira = <fecha>
Set-Cookie: <galleta-name> = <galleta-valor>; Max-age = <distinto de cero dígitos>
Set-Cookie: <galleta-name> = <galleta-valor>; Domain = <dominio-valor>
Set-Cookie: <galleta-name> = <galleta-valor>; Path = <ruta-valor>
Set-Cookie: <galleta-name> = <galleta-valor>; Seguro
Set-Cookie: <galleta-name> = <galleta-valor>; HttpOnly
Set-Cookie: <galleta-name> = <galleta-valor>; SameSite = Estricto
Set-Cookie: <galleta-name> = <galleta-valor>; SameSite = Lax
// Varias directivas también son posibles, por ejemplo:
Set-Cookie: <galleta-name> = <galleta-valor>; Domain = <dominio-valor>; Seguro; HttpOnly
```