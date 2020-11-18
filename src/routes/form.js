'use strict';

const express = require('express');
const Form = require('../form/form-model');
const router = express.Router();

router.get('/contact', (req, res, next) => {
    const formFirstName = req.params.firtName;
    const formLastName = req.params.lastName;
    const formCompany = req.params.company;
    const formMessage = req.params.message;

    Form.find({
        formFirstName,
        formLastName,
        formCompany,
        formMessage,
    })
        .then(results => res.send(results))
        .catch(error => res.send(error));
});

router.post('/save-contact', (req, res, next) => {
    console.log('contact saved', req.body);

    const saveContact = new Form(req.body);
    saveContact.save()
        .then(form => res.status(201).send(form));
});

module.exports = router;