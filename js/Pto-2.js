let ciudades = []

function listaCiudades () {
  document.write(
    `<h2>Lista de arreglos </h2>`)
    document.write(`<ul>`);
    for (let i = 0; i < ciudades.length; i++) {
      document.write(`<li>${ciudades[i]}</li>`);
    }
    document.write(`</ul>`);
}

for (let i = 0; confirm("¿Quiere ingresar una ciudad?"); i++) {
    ciudades[i] = prompt("Ingrese una ciudad");
  } 
  document.write(
    `<h2>Analisis del arreglo </h2>
    <p>El arreglo tiene: ${ciudades.length} elementos </p>`);
  document.write(`<ul>`);
  for (let i = 0; i < ciudades.length; i++) {
    if(i == 0 || i == 2){
        document.write(`<li>Elemento de la posicion ${i} es: ${ciudades[i]}</li>`);
      }
    }
    document.write(`<li>Elemento de la ultima posicion es: ${ciudades[ciudades.length - 1]}</li>`);
    ciudades.push("Paris");
    document.write(`<li>Elemento de la ultima posicion es: ${ciudades[ciudades.length - 1]}</li>`);
  document.write(`</ul>`);

  ciudades[1] = prompt("Escribe por pantalla el elemento que ocupa la segunda posición.");
  listaCiudades();
  ciudades[1] = "Barcelona"
  listaCiudades();  
