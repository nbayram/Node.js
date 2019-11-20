'use strict';

function padLeft(val, num, str) {
  return '00000'.replace(/0/g, str).slice(0, num - val.length) + val;
}

const numbers = ["12", "846", "2", "1236"];

// use the exports keyword in andrejs-awesome-function.js
module.exports = {
  padLeft,
  numbers
}