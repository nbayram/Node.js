'use strict';

// use the require keyword in app.js
const andre = require('./andrejs-awesome-function.js');

// use forEach to loop over the array in app.js
andre.numbers.forEach(number => {
  // use padLeft(number, 4 , " ") to pad a number to 4 characters
  console.log(andre.padLeft(number, 4, " "));
});