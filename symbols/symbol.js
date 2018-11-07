const x = Symbol('hello');

const obj = {
  name: 'Joe',
  age: 22
};

obj[x] = 'secret';

console.log(Object.getOwnPropertySymbols(obj));