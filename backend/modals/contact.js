const mongoose = require('mongoose');
const Users = require('./user');

const ContactSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Users
    },
    phoneNumber: {
        type: String,
        required: true
    },
}, { timestamps: true });


const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;