import mongoose from "mongoose";
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    program_type: {
        type: String,
        enum: ['Socal', 'Charity', 'Sale', 'Reading', 'Presentation', 'Creative', 'Other'],
        required: true,
    },
    age_group: {
        type: String,
        enum: ['Everyone', 'Adult', 'Teen_Tween', 'Children'],
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
});

export default mongoose.model("Event", EventSchema);