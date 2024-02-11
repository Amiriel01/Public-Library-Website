import mongoose from "mongoose";
const Schema = mongoose.Schema;

const VolunteerFormSchema = new Schema({
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
    work_experience: {
        type: String,
        required: true,
    },
    volunteer_experience: {
        type: String,
        required: true,
    },
    monday: {
        type: Boolean,
    },
    tuesday: {
        type: Boolean,
    },
    wednesday: {
        type: Boolean,
    },
    thursday: {
        type: Boolean,
    },
    friday: {
        type: Boolean,
    },
    saturday: {
        type: Boolean,
    },
    sunday: {
        type: Boolean,
    },
    morning: {
        type: Boolean,
    },
    afternoon: {
        type: Boolean,
    },
    evening: {
        type: Boolean,
    },
    interviewed: {
        type: Boolean,
        default: false,
    },
    interview_notes: {
        type: String,
    },
    approved: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("VolunteerForm", VolunteerFormSchema);