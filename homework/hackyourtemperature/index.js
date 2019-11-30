
const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

// To make Express aware of what data type the incoming data is (which is JSON). We do that using the urlencoded() method on the express object. Using the use() function from app, pass in the urlencoded() from express. Give the urlencoded() function the following argument: { extended: true }
app.use(express.urlencoded({ extended: true }));

// Make Express aware of the templating engine.
// First param: file extension
// Second param: handlebars function => first param: all of pages content this main page
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  // Instead of sending a string, send a template using the render() function. Pass in the name of the template, which is index
  res.render('index');
});

// Creating a POST route that will allow us to access the submitted form data. Create a POST route, that has as an endpoint: /weather
// Second param: middlewire and catch urlencoded inside of the body before the send
app.post('/weather', (req, res) => {
  // Inside the callback function of the route, get access to the cityName and put it inside a variable. Hint: use the body object from the request to find it.
  const cityName = req.body.cityName;
  if (cityName) {
    // Send the the form input back as a response to the client
    res.send({ cityName });
  } else {
    res.statusCode = 400;
    res.send('Bad Request!');
  }
})

app.listen(3000, () => {
  console.log('Server is listening on port', 3000);
});