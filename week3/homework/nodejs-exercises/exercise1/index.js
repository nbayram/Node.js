'use strict';

// Install and require node-fetch.
// npm i node-fetch
const fetch = require('node-fetch');

// GET a random joke from the URL http://www.icndb.com/api/
fetch('http://api.icndb.com/jokes/random')
  .then(response => {
    if (response.ok) return response.json();
    else throw new Error(response.statusText);
  })
  .then(cardOfJoke => console.log(cardOfJoke.value.joke)) // Print the joke to the console
  .catch(error => console.error(error.message));


// const fetch = require('node-fetch');
// fetch('http://api.icndb.com/jokes/random')
//   .then(res => {
//     if (res.ok) return res.json();
//     else
//       throw new Error(
//         `Something went wrong: ${res.statusText} (${res.status})`,
//       );
//   })
//   .then(({ value }) => console.log(value.joke))
//   .catch(err => console.log(err));