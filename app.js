'use strict';

require('dotenv').config();
const  mongoose = require('mongoose');
const server = require('./src/app');
const express = require('express');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'front-end/public')));

app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

server.start(process.env.PORT);