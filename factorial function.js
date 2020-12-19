const factorial = (num) => {
    if (num === 0) {
        return 1;
    } else {
  for (let i = num - 1; i > 0; i--) {
    num *= i;
  }
  return num;}
}

console.log(factorial(6));

// function factorialize(num) {
//     for (var product = 1; num > 0; num--) {
//       product *= num;
//     }
//     return product;
//   }
  
//   factorialize(6);