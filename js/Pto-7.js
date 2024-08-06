/* 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario.*/
let multiplicados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function Multiplicar(){
for(let i=0;i<=10;i++){
 multiplicados[i]=i*numero;
}
}
function mostrarTabla(){
for(i=0;i<=10;i++){
    document.write (`<tr>
            <td> ${i} </td>
            <td> ${multiplicados[i]} </td>
            <tr>
        `)
}
}
const numero = parseInt(prompt ("Ingrese numero para hacer tabla de multiplicar:"));

Multiplicar()

document.write(`<table>
    <thead>
    <tr>
    <th>Rgo(0-10)</th>
    <th>Resultado</th>
    </tr>
    </thead>
    <tbody>`);
    mostrarTabla()
    document.write(`
        </tbody>
    </table>`);


