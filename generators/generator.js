const numbers = [...Array(50 + 1).keys()];

const obj = {
  numbers,
  isPrime(number) {
    for(let i = 2; i < number; i++) {
      if(number % i === 0) {
        return false;
      }
    }
    return number !== 1 && number !== 0;
  },
  *[Symbol.iterator]() {
    for (let i = 0; i < this.numbers.length; i++) {
      const number = this.numbers[i];
      if (this.isPrime(number)) {
        yield number;
      }
    }
  }
};

const primes = [ ... obj ];
console.log(primes);