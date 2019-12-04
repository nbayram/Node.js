'use strict';

// Install and require node-fetch.
// npm i node-fetch
const fetch = require('node-fetch');


fetch('https://reservation100-sandbox.mxapps.io/api/reservations', {
  method: 'POST', // Which methods are available (GET or POST)
  // What should the request contain
  body: JSON.stringify({
    "name": "John Doe",
    "numberOfPeople": 3
  }),
  headers: { 'Content-Type': 'application/json' } // What headers are expected
})
  .then(res => res.text()) // FetchError: invalid json response body
  .then(data => console.log(data))
  .catch(console.error);