const ContactInfo = require('../models/Contact');

exports.postContacts = (req, res, next) => {
    const contact = new ContactInfo({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject
    })

    contact.save()
        .then(result => {
            res.redirect('/');
        }).catch(err => console.log(err));
}