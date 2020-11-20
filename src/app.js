'use strict';

const express = require ('express');
const cors = require('cors');
const morgan = require ('morgan');

const formRoute = require('../src/routes/portfolio');

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(formRoute);


app.get('/contact', formRoute);

app.get('/', (request, response) => {
    response.send('homepage of portfolio')
});

module.exports = {
  server: app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Server up on port:: ${PORT}`);
    });
  },
};