import mongoose from "mongoose";
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    program_type: {
        type: String,
        enum: ['Social', 'Charity', 'Sale', 'Reading', 'Presentation', 'Creative', 'Other'],
        required: true,
    },
    age_group: {
        type: String,
        enum: ['All', 'Adult', 'Teen', 'Children'],
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    description1: {
        type: String,
        required: true
    },
    description2: {
        type: String,
    },
    imageURL: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Event", EventSchema);