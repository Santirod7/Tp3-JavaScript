/* 4- Escribir el código de una función a la que se pasa como parámetro un número
entero y devuelve como resultado una cadena de texto que indica si el número es
par o impar. Mostrar por pantalla el resultado devuelto por la función.*/
const numero = parseInt(prompt ("Ingresa un numero entero:"));
function analisisParametrico () {
if(numero % 2 === 0){
    return (`${numero} es un numero par`)
} else {
    return (`${numero} es un numero impar`)
}
}
document.write (`${analisisParametrico()}`)