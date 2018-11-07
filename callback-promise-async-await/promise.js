const request = require('request');
const url = 'https://swapi.co/api/people/1';

function promiseRequest(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(error);
      }
      resolve(JSON.parse(body));
    });
  })
}

promiseRequest(url)
.then(response => {
  console.log(response.name)
  return promiseRequest(response.homeworld)
}).then(response => {
  console.log(response.name);
}).catch(error => console.error(error));

