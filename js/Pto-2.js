let ciudades = []

for (let i = 0; confirm("¿Quiere ingresar una ciudad?"); i++) {
    ciudades[i] = prompt("Ingrese una ciudad");
  } 
  document.write(
    `<h2>Analisis del arreglo </h2>
    <p>El arreglo tiene: ${ciudades.length} elementos </p>`);
  document.write(`<ul>`);
  for (let i = 0; i < ciudades.length; i++) {
    if(i == 1 || i == 3 || i == ciudades.length-1){
        document.write(`<li>Elemento de la posicion ${i} es: ${ciudades[i]}</li>`);
    }
  }
  document.write(`</ul>`);
  document.write(
    `<h2>Lista de arreglos </h2>`)
  document.write(`<ul>`);
  for (let i = 0; i < ciudades.length; i++) {
        document.write(`<li>${ciudades[i]}</li>`);
  }
  document.write(`</ul>`);