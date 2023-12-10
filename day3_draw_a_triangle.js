// En este desafío, debes dibujar un triángulo isósceles usando bucles.

// Recibirás dos parámetros: size y character, que definen el tamaño y el carácter con el que se debe construir el triángulo, respectivamente. Además, el triángulo debe estar alineado a la derecha, lo que significa que la columna más derecha del triángulo debe estar en el borde derecho de la consola.

// Recuerda que para hacer el salto de línea debes usar "\n", no olvides removerla de la última parte.

// Tendrás inputs y outputs como los siguientes 👇
 
// Ejemplo 1:

// Input: printTriangle(5, "*")
// Output:
//     *
//    **
//   ***
//  ****
// *****

// Ejemplo 2:

// Input: printTriangle(6, "$")
// Output:
//      $
//     $$
//    $$$
//   $$$$
//  $$$$$
// $$$$$$

export function printTriangle(size, character) {
  // Declare an empty string to accumulate the triangle representation
  let triangle = "";

  // Loop through each row of the triangle
  for (let i = 1; i <= size; i++) {
    // Generate the current row with the desired character
    const row = character.repeat(i);

    // Pad the row with spaces to ensure consistent right-alignment
    const paddedRow = row.padStart(size, " ");

    // Append the current row to the triangle, followed by a newline
    triangle += paddedRow + (i < size ? "\n" : "");
  }

  // Return the complete triangle string
  return triangle;
}