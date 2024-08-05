/* Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
esta operación.*/
let dado1 = 0
let dado2 = 0
let resultado = 0
const sumaDados = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let Apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function sumaDadosAleatorios () {
    dado1 = Math.floor(Math.random() * 6) + 1;
    console.log(`dado 1: ${dado1}`);
    dado2 = Math.floor(Math.random() * 6) + 1;
    console.log(`dado 2: ${dado2}`);
    resultado = dado1 + dado2
    console.log(resultado);
}

for (let i=0 ; i < 50 ; i++){
    sumaDadosAleatorios();
    for (let j=0 ; j <= 10 ; j++){
        if(sumaDados[j]==resultado){
            Apariciones[j]++;
        }
    }
}
document.write(`<table>
    <thead>
    <tr>
    <th>Suma dados 🎲</th>
    <th>Repeticiones</th>
    </tr>
    </thead>
    <tbody>`);
    for (let i=0 ; i <= 10 ; i++){ 
        document.write(` 
            <tr>
            <td> ${sumaDados[i]} </td>
            <td>${Apariciones[i]} </td>
            <tr>`
        )
}
document.write(`
    </tbody>
</table>`);

