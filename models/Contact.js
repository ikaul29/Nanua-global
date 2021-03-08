const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    fname: {
        type: String,
    },
    lname: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
    },
    message: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Contact', ContactSchema);