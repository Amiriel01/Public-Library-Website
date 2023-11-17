import mongoose from "mongoose";
//define schema
const Schema = mongoose.Schema;

//create contact schema
const ContactSubmissionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        match: /.+\@.+\..+/,
        required: true,
    },
    help: {
        type: String,
        enum: ['Questions about my library card', 'Questions about programs', 'Quesitons about events', 'Questions about donations', 'Questions about Questions about volunteer opportunities', 'Issues with the website', 'Other Questions'],
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    admin_notes: {
        type: String,
    }
})

export default mongoose.model("ContactSubmission", ContactSubmissionSchema);