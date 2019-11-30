'use strict';

const express = require('express');
const apis = require('./api/apis.js');
const fs = require('fs');

const app = express();

// Use json method for the body content
app.use(express.json());

const PORT = 3000;

app.get('/blogs/:title', apis.getPost);

app.post('/blogs', apis.checkTitleContent, apis.createPost);

app.put('/blogs', apis.checkTitleContent, apis.updatePost);

app.delete('/blogs/:title', apis.deletePost);

app.listen(PORT, () => {
  console.log('Server started!');
});