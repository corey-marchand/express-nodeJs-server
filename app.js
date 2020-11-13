const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('', (req, res) => {
    res.send('home');
})

app.get('/about', (req, res) => {
    res.send('about');
})

app.get('/portfolio', (req, res) => {
    res.send('portfoio');
})

app.get('/contact', (req, res) => {
    res.send('contact');
})

app.post('/post-test', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});

 

app.listen(3000, () => {
    console.log('Server is running on Port 3000');
})