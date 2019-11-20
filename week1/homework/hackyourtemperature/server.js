const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.write('hello from backend to frontend!');
  res.end();
})

app.listen(3000, () => {
  console.log('Server started...')
})