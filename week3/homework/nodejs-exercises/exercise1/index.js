'use strict';

// Install and require node-fetch.
// npm i node-fetch
const fetch = require('node-fetch');

// GET a random joke from the URL http://www.icndb.com/api/
fetch('http://api.icndb.com/jokes/random')
  .then(data => data.json())
  .then(cardOfJoke => console.log(cardOfJoke.value.joke)) // Print the joke to the console
  .catch(console.error);