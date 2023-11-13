//require mongoose
const mongoose = require("mongoose");
//define schema
const Schema = mongoose.Schema;

//create contact schema
const ContactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    contact_method: {
        type: String,
        enum: ['phone', 'email'],
        required: true,
    },
    phone: {
        type: Number
    },
    email: {
        type: String,
        match: /.+\@.+\..+/,
    },
    help: {
        type: String,
        enum: ['Questions about my library card', 'Questions about programs', 'Quesitons about events', 'Questions about donations', 'Questions about Questions about volunteer opportunities', 'Issues with the website', 'Other Questions'],
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

export default mongoose.model("Contact", ContactSchema);