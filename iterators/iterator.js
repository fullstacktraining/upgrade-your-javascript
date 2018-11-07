const numbers = [...Array(50 + 1).keys()];

const obj = {
  numbers,
  isPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number !== 1 && number !== 0;
  },
  idx: 0,
  [Symbol.iterator]() {
    const it = {
      next: () => {
        if (this.idx < this.numbers.length) {
          const number = this.numbers[this.idx];
          if (!this.isPrime(number)) {
            this.idx++;
            return this[Symbol.iterator]().next();
          } else {
            const number = this.numbers[this.idx];
            this.idx++;
            return { value: number, done: false };
          }
        } else {
          return { done: true };
        }
      }
    };
    return it;
  }
};

// for (const prime of obj) {
//   console.log(prime);
// }

const primes = [...obj];
console.log(primes);