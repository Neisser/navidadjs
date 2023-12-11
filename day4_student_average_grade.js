// En este desafío, deberás calcular el promedio general de una clase, así como el promedio individual de cada estudiante.

// Para ello, se te proporcionará un array de objetos, cada uno de los cuales representará a un estudiante y tendrá las siguientes propiedades:

// name: El nombre del estudiante
// grades: Las notas de cada materia del estudiante
// A partir de esta información, debes retornar un nuevo objeto que tenga la propiedad classAverage con el promedio de la clase y un array de students con los estudiantes y sus promedios individuales.

// Es importante mencionar que los promedios deben ser calculados con precisión y se deben redondear a dos decimales para que los test pasen sin problema alguno. Puedes usar el método toFixed() el cual se usa de la siguiente manera 👇

// const number = 100.32433;
// number.toFixed(2); // "100.32"

// 👀 Ten en cuenta que este método regresa el número como un string y se espera que sea de tipo numérico.

// Ejemplo:

// Input: getStudentAverage([
//   {
//     name: "Pedro",
//     grades: [90, 87, 88, 90],
//   },
//   {
//     name: "Jose",
//     grades: [99, 71, 88, 96],
//   },
//   {
//     name: "Maria",
//     grades: [92, 81, 80, 96],
//   },
// ])

// Output: {
//   classAverage: 88.17,
//   students: [
//     {
//       name: "Pedro",
//       average: 88.75
//     },
//     {
//       name: "Jose",
//       average: 88.5
//     },
//     {
//       name: "Maria",
//       average: 87.25
//     }
//   ]
// }

/**
 * Calculates the average grade for each student and the class overall.
 *
 * @param {Student[]} students An array of student objects, where each object has the following properties:
 *   - name: The name of the student (string)
 *   - grades: An array of the student's grades (numbers)
 * @returns {AverageResults} An object containing the average grades for each student and the class overall.
 */
export function getStudentAverage(students) {
  let classAverage = 0;

  let studentResults = students.map(element => {
    
    const averageGrades = element.grades.reduce((a, b) => a + b, 0) / element.grades.length;
    
    classAverage += averageGrades / students.length; 
    
    return {
      name: element.name,
      average: parseFloat(averageGrades.toFixed(2)),
    }
  });

  return {
    classAverage: parseFloat(classAverage.toFixed(2)),
    students: studentResults,
  };
}