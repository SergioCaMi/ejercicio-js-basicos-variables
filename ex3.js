/**
 * Jugando con strings
 */

let nombre = "Mad";
let apellido = "Max";

let presentacion = "Me llamo" + " " + nombre + " " + apellido;

/**
 * Pregunta 1: Modifica la línea 8. ¿Qué valor tengo que asignar a 'presenetacion' para que me muestre pantalla:
 *   * "Me llamo Mad Max"
 *
 * 
 * 
 */

console.log("Pregunta 1:", presentacion);

/**
 * Pregunta 2: Cambia el valor de las variables adecuadamente para que, en vez de "Me llamo Mad Max", escribe "Me llamo {tu nombre} {tu apellido}"
 */
nombre="Sergio";
apellido="Calvo";
presentacion = "Me llamo" + " " + nombre + " " + apellido;
console.log("Pregunta 2:", presentacion);
