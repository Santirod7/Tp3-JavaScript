/* 5- Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas. */
function analisisArgumento(cadenaTexto){
    if(cadenaTexto === cadenaTexto.toUpperCase()){
        return ("Este argumento contiene solo mayusculas")
    } else
    if(cadenaTexto === cadenaTexto.toLowerCase()){
        return ("Este argumento contiene solo minusculas")
    } else {
        return ("Este argumento contiene mezcla de minuscula y mayuscula")
    }
}
const cadenaTexto = prompt("Ingrese un argumento");


document.write (`${analisisArgumento(cadenaTexto)}`)
