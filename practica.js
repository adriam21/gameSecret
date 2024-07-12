// listaGenerica = [];
// listaLenguajes = ["JavaScript", "C", "C++", "Kotlin", "Python"];
// listaLenguajes.push("Java", "Ruby", "golan");

// function listarLenguajesDeProgramacion(listaLenguajes) {
//   listaLenguajes.forEach(function (lenguajes) {
//     console.log(lenguajes);
//   });
// }

// const lenguajesDeProgramacion= ["Python", "JavaScript", "Java", "C++", "Ruby"];
// listarLenguajesDeProgramacion(lenguajesDeProgramacion);

// const lenguajesDeProgramacion = ["Python", "JavaScript", "Java", "C++", "Ruby"];
// console.log(lenguajesDeProgramacion);

// lenguajesDeProgramacion.reverse();
// console.log(lenguajesDeProgramacion);

// function calcularPromedio(lista) {
//   if (lista.length === 0) {
//     //evita que la lista se divida entre 0
//     return 0;
//   }
//   const suma = lista.reduce(
//     //reduce es una accion para sumar elementos en un array
//     (acumulador, valorActual) => acumulador + valorActual,
//     0
//   );
//   const promedio = suma / lista.length; //obtenemos el promedio de la suma del array

//   return promedio;
// }
// //ejemplo con una lista del 1 al 6
// const numeros = [1, 2, 3, 4, 5, 6, 7];
// const promedio = calcularPromedio(numeros);
// console.log(`El promedio es: ${promedio}`);

// function mostrarNumeros(lista) {
//   if (lista.length === 0) {
//     console.log("La lista esta vacia");
//   }
//   let mayor = lista[0];
//   let menor = lista[0];

//   for (let i = 1; i < lista.length; i++) {
//     if (lista[i] > mayor) {
//       mayor = lista[i];
//     }
//     if (lista[i] < menor) {
//       menor = lista[i];
//     }
//   }
//   console.log(`El numero mayor es: ${mayor}`);
//   console.log(`El numero menor es: ${menor}`);
// }

// const numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// mostrarNumeros(numeros);

// function sumaNumeros(lista) {
//   let suma = 0;
//   for (let i = 0; i < lista.length; i++) {
//     suma += lista[i];
//   }
//   return suma;
// }

// const numeros = [1, 2, 3, 4, 5, 6, 7];
// let suma = sumaNumeros(numeros);
// console.log(`La suma de numeros es: ${suma}`);

// function encontrarIndiceElemento(lista, elemento) {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === elemento) {
//       return i;
//     }
//   }

//   return -1;
// }
// const numeros = [1, 2, 3, 4, 5, 6, 7];
// const elementoABuscar = 7;
// const indice = encontrarIndiceElemento(numeros, elementoABuscar);
// console.log(`El indice del elemento ${elementoABuscar} es ${indice}`);

// const elementoInexistente = 9;
// const indiceInexistente = encontrarIndiceElemento(numeros, elementoInexistente);
// console.log(
//   `El índice del elemento ${elementoInexistente} es: ${indiceInexistente}`
// ); // Salida: El índice del elemento 10 es: -1
