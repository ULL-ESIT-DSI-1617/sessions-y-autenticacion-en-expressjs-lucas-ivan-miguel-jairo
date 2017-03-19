##Json
> ### ¿ Qué es un Json ?
* JSON es un formato estándar para datos.
* Destaca por ser ligero y  rápido (por tanto muy útil para desarrollos web).
* Los datos en formato JSON pueden ser utilizados por prácticamente todos los lenguajes de programación (como Java, C#, C, C++, PHP, JavaScript, Python, etc.). 
* Una herramienta online para comprobar la sintaxis de estos archivos son:
    * http://jsonviewer.stack.hu/ 
    * http://jsonlint.com/
* Los archivos JSON son simples archivos de texto con extensión json. 
```json
{
  "responsable": {
    "Nombre": "Juan",
    "Edad": 28,
    "Aficiones": [
      "Música",
      "Cine",
      "Tenis"
    ],
    "Residencia": "Madrid"
  },
  "empleados": [
    {
      "Nombre": "Elena",
      "Edad": 26,
      "Aficiones": [
        "Música",
        "Cine"
      ],
      "Residencia": "Madrid"
    },
    {
      "Nombre": "Luis",
      "Edad": 31,
      "Aficiones": [
        "Teatro",
        "Cine",
        "Fútbol"
      ],
      "Residencia": "Madrid"
    }
  ]
}
```
> * En muchas ocasiones se trabaja con archivos JSON donde todos los espacios y saltos de línea han sido eliminados buscando ocupar el mínimo espacio posible. Esta técnica se llama “minificado”. Minificar es conseguir que un fichero sea menos pesado modificando 
ciertos elementos: espacios innecesarios, saltos de línea, tabulaciones, comentarios, etc.
```json
{"responsable":{"Nombre":"Juan","Edad":28,"Aficiones":["Música","Cine","Tenis"],
"Residencia":"Madrid"},"empleados":[{"Nombre":"Elena","Edad":26,
"Aficiones":["Música","Cine"],"Residencia":"Madrid"},{"Nombre":"Luis","Edad":31,
"Aficiones":["Teatro","Cine","Fútbol"],"Residencia":"Madrid"}]}
```


