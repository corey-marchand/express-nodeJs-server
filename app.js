const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

let messages = [];

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

app.post('/form', (req, res) => {
    const newMessage = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        company: req.body.company,
        message: req.body.message,
    }
    message.push(newMessage);
    console.log(message);
});

app.listen(3000, () => {
    console.log('Server is running on Port 3000');
})