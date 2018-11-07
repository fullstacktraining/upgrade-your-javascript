const request = require('request');
const url = 'https://swapi.co/api/people/1';

function promiseRequest(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(error)
      }
      resolve(JSON.parse(body));
    });
  });
}

async function displayMessage() {
  try {
    const data = await promiseRequest(url);
    const homeworldURL = data.homeworld;
    const homeworldName = await promiseRequest(homeworldURL);
    console.log(`${data.name} is from ${homeworldName.name}.`);
  } catch(error) {
    console.log(error);
  }
}

displayMessage();