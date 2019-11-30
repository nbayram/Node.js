
const fs = require("fs");
const path = require('path');

function createPost(req, res) {
  // Get content of the body with object destruction
  const { title, content } = req.body;
  // For writeFileSync function:
  // First Param: Which file do you write?
  // Second Param: What do you write in the file?
  fs.writeFileSync(title, content);
  res.send('ok');
}

function updatePost(req, res) {
  const { title, content } = req.body;
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.send('ok');
  }
  else {
    res.statusCode = 404;
    res.send('post does not exist');
  }
};

function checkTitleContent(req, res, next) {
  const { title, content } = req.body;
  if (title && content) {
    next();
  } else {
    // Bad Request
    res.statusCode = 400;
    res.send('error');
  }
};

function deletePost(req, res) {
  if (fs.existsSync(req.params.title)) {
    fs.unlinkSync(req.params.title);
    res.send('ok');
  } else {
    res.statusCode = 404;
    res.send('Not Found!');
  }
};

function getPost(req, res) {
  if (fs.existsSync(req.params.title)) {
    res.sendFile(path.join(__dirname, req.params.title));

  } else {
    res.statusCode = 404;
    res.send('Not Found!');
  }
}

module.exports = {
  createPost,
  updatePost,
  checkTitleContent,
  deletePost,
  getPost
};