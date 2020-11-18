'use strict';

const mongoose = require('mongoose');

const form = mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    company: { type: String, required: true},
    message: { type: String, required: true},
});

module.exports = mongoose.model('form', form);