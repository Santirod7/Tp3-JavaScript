/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla. */

function perimetro(){
    const perimetro = 2*(altura+base);
    return perimetro
}
const base = parseInt(prompt ("Ingrese medicion de la base del rectangulo:"));
const altura = parseInt(prompt ("Ingrese medicion de la altura del rectangulo:"));


document.write (`El perimetro del rectángulo es: ${perimetro()}`)