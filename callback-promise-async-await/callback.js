// const fs = require('fs');
// const path = require('path');
// fs.readdir(__dirname, (error, files) => {
//   if (error) {
//     console.error(`Error reading folder ${error}`);
//   } else {
//     files.forEach(filename => {
//       if (path.extname(filename) === '.tmp') {
//         fs.unlink(filename, (error) => {
//           if (error) {
//             console.error(`Error deleting file ${error}`);
//           } else {
//             console.info(`Successfully deleted ${filename}`);
//           }
//         });
//       }
//     });
//   }
// });

const request = require('request');
const url = 'https://swapi.co/api/people/1';

// request(url, (error, response, body) => {
//   if (error) {
//     throw Error(`Error: ${JSON.stringify(error)}`);
//   }
//   console.log('Response status code', response.statusCode);
//   console.log(JSON.parse(body));
//   const homeworldURL = JSON.parse(body).homeworld;

//   request(homeworldURL, (error, response, body) => {
//     if (error) {
//       throw Error(`Error: ${JSON.stringify(error)}`);
//     }
//     console.log(JSON.parse(body));
//   });
// });

function makeRequest(url, callback) {
  return request(url, (error, response, body) => {
    if (error) {
      callback(error);
    }
    callback(JSON.parse(body));
  });
}

makeRequest(url, data => {
  console.log(data.name);
  const homeworldURL = data.homeworld;
  makeRequest(homeworldURL, data => {
    console.log(data.name);
  });
});