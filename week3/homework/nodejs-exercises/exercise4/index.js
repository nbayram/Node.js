'use strict';

// Install and require handlebar (not express-handlebars, just handlebars)
const handlebars = require('handlebars');

// copy the subjects and punchlines to javascript
const subjects = ["shark", "popcorn", "poison", "fork", "cherry", "toothbrush", "cannon"];

const punchlines = ["watch movie with", "spread some love", "put on cake", "clean toilets", "go to the moon", "achieve world piece", "help people learn programing"];

// write code that randomly picks a subject and punchline
const source = '<p>{{subjects}} is great to {{punchlines}}</p>';

const template = handlebars.compile(source);

const giveRandomFromArray = (array) => array[Math.floor(Math.random() * array.length)];

// replace the blanks in phrase with the random subject and punchline using handlebars
const result = template({
  subjects: giveRandomFromArray(subjects),
  punchlines: giveRandomFromArray(punchlines)
});

console.log(result);


