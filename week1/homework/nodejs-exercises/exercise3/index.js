'use strict';

var http = require('http');

//create a server
let server = http.createServer(function (req, res) {

  // http:\\localhost:3000\script.js
  if (req.url === '/script.js') {
    res.setHeader('Content-Type', 'text/javascript');
    res.write(`document
    .getElementById('content')
    .appendChild(document.createTextNode('Welcome to Server-land!'));`)
  }

  // http:\\localhost:3000\style.css
  else if (req.url === '/style.css') {
    res.setHeader('Content-Type', 'text/css');
    res.write(`#content { color: blue }`);
  }

  else {

    // Do not forget to set the content-type to text/html so that the browser knows how to deal with the response. Use the function response.setHeader(name, value)
    res.setHeader('Content-Type', 'text/html');

    // don't be afraid to copy-paste this directly in the javascript file using as a multiline string. You shouldn't use a separate html file for now.
    // http:\\localhost:3000 and else
    res.write(`<html>
  <head>
    <title>My First Web Server</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <h1>Hello, anyone there?</h1>
    <div id="content"></div>
    <script src="script.js"></script>
  </body>
</html>`); //send a response back to the client
  }
  res.end(); //end the response
});

server.listen(3000); //the server listens on port 3000