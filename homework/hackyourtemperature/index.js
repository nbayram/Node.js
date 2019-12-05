
const express = require('express');
const handlebars = require('express-handlebars');
const axios = require('axios');
const key = require('./sources/keys.json').apiKey;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/weather', (req, res) => {
  const cityName = req.body.cityName;
  if (cityName) {
    axios(`https://api.openweathermap.org/data/2.5/weather?APPID=${key}&q=${cityName}&units=metric`)
      .then(response => res.render('index', { weatherText: `${response.data.name}: ${response.data.main.temp} °C` }))
      .catch(() => res.render('index', { weatherText: "City is not found!" }))
  } else {
    res.statusCode = 400;
    res.send('Bad Request!');
  }
})

app.listen(3000, () => {
  console.log('Server is listening on port', 3000);
});