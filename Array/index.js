
const names = ['David', 'Ann', 'Leia', 'Mathew', 'Mark'];

// Print the array
console.log(names);
console.log(names[1]);
console.log(names.length);
console.log(names[names.length - 1]);
names.push('peter');
console.log(names);
console.log(names.join(' '));
const indexOfMathew = names.indexOf('Mathew');

// Replace "Mathew" with "Lisa"
names.splice(indexOfMathew, 1, 'Lisa');

// Add "Abraham" to the array
names.push('Abraham');

// Print the updated array
console.log(names.join(','));
// Sort the array in alphabetical order
names.sort();

// Print the sorted array
console.log(names.join(','));

// Sort the numbers in descending order
numbers.sort((a, b) => b - a);

// Print the sorted array
console.log(numbers);

// Function to shuffle an array 
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Randomize the numbers array
const randomizedNumbers = shuffleArray(numbers.slice());

// Print the randomized array
console.log(randomizedNumbers);

const numbers = [1, 7, 45, 32, 27, 86];

// Sort the numbers array in ascending order
numbers.sort(function(a, b) {
    return a - b;
});

// The first element is the smallest value
const smallest = numbers[0];

// The last element is the largest value
const largest = numbers[numbers.length - 1];

// Print the smallest and largest values
console.log("Smallest value: " + smallest);
console.log("Largest value: " + largest);
  
