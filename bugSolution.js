function myFunction(a, b) {
  if (b === 0) {
    return Infinity; // Or NaN, or throw an error
  } else if (a === 0) {
    return 0;
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Returns Infinity
console.log(myFunction(10, 2)); // Returns 5