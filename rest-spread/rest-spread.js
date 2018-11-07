function multiply(num = 0, multiplier = 1) {
  return num * multiplier;
}

console.log(
  multiply(),
  multiply(5),
  multiply(5, 2)
);

// function add(...numbers) {
//   return numbers.reduce((acc, number) => acc + number);
// }

// console.log(
//   add(3, 4)
// );

// const fruit = ['apple', 'pear'];
// const moreFruit = ['peach'];

// const allFruit = [...fruit, ...moreFruit];
// console.log(allFruit);