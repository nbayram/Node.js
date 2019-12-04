'use strict';

// Install and require node-fetch.
// npm i node-fetch
const fetch = require('node-fetch');

// For this exercise you need to write a program thats calls the API https://restapiabasicauthe-sandbox.mxapps.io/api/books and prints the response to the console.
fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', {
  // Visit https://www.base64encode.org/ to convert admin:hvgX8KlVEa to base64
  // Set the authorization header in the GET request - fetch(<URL>,{ headers: { 'Authorization': 'Basic XXXXXX' } }
  headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' }
})
  .then(data => data.json())
  .then(console.log) // Print the response
  .catch(console.error);