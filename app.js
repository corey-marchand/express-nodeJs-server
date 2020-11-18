'use strict';

require('dotenv').config();
const  mongoose = require('mongoose');
const server = require('./src/app');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

server.start(process.env.PORT);