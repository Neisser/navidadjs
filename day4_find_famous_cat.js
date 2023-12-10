// En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores.

// Recibirás un array de objetos que incluirán las siguientes propiedades:

// name: nombre del gatito.
// followers: un array de números, donde cada uno representa los seguidores de cada red social.
// Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, manteniendo el orden en el que aparecen en el array de entrada.

// Tendrás inputs y outputs como los siguientes 👇

// Ejemplo 1:

// Input: findFamousCats([
//   {
//     name: "Luna",
//     followers: [500, 200, 300]
//   },
//   {
//     name: "Michi",
//     followers: [100, 300]
//   },
// ])

// Output: ["Luna"]

// Ejemplo 2:

// Input: findFamousCats([
//   {
//     name: "Mimi",
//     followers: [320, 120, 70]
//   },
//   {
//     name: "Milo",
//     followers: [400, 300, 100, 200]
//   },
//   {
//     name: "Gizmo",
//     followers: [250, 750]
//   }
// ])

// Output: ["Milo", "Gizmo"]

/**
 * Identifies the most famous cats from a list based on their follower count.
 *
 * @param {Cat[]} cats An array of cat objects, where each object has the following properties:
 *   - name: The name of the cat (string)
 *   - followers: An array of follower counts for the cat (integers)
 * @returns {string[]} An array containing the names of the most famous cats.
 */
export function findFamousCats(cats) {
  // Initialize variables to track the maximum follower count and famous cats
  let maxFollowers = 0;
  let famousCats = [];

  // Iterate through each cat in the list
  for (const cat of cats) {

    // Calculate the total number of followers for the current cat
    const currentFollowers = cat.followers.reduce((a, b) => a + b, 0);

    // Update the data structures based on current follower count
    if (currentFollowers === maxFollowers) famousCats.push(cat.name);

    if (currentFollowers > maxFollowers) [maxFollowers, famousCats] = [currentFollowers, [cat.name]];


  }

  // Return the list of most famous cats
  return famousCats;
}