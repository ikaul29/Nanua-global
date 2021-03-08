const ContactInfo = require('../models/Contact');
const EmailInfo = require('../models/Email');

exports.postContacts = (req, res, next) => {
    const contact = new ContactInfo({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })

    contact.save()
        .then(result => {
            res.redirect('/');
        }).catch(err => console.log(err));
}

exports.postEmail = (req, res, next) => {
    const email = new EmailInfo({
        email: req.body.email
    });

    contact.save()
        .then(result => {
            res.redirect('/');
        }).catch(err => console.log(err));
}