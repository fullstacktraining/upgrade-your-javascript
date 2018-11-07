function greet(strings, ...values) {
  let greetingMessage = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (process.env.LANG === 'es_ES.UTF-8') {
        greetingMessage += 'Hola '
        greetingMessage += values[i - 1];
      } else {
        greetingMessage += 'Hi '
        greetingMessage += values[i - 1];
      }
    }
    greetingMessage += strings[i];
  }
  return greetingMessage;
}
process.env.LANG = 'es_ES.UTF-8';
const name = 'Joe';
const message = greet`${name}!`;
console.log(message);