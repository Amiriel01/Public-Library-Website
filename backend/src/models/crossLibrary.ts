import mongoose from "mongoose";
//define schema
const Schema = mongoose.Schema;

const CrossLibraryFormSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    material_type: {
        type: String,
        enum: ['Book', 'Audio_Book', 'DVD'],
        required: true
    },
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
    library_card_number: {
        type: Number,
        required: true,
    },
    ordered: {
        type: Boolean,
        default: false,
    },
    order_notes: {
        type: String,
    },
});

export default mongoose.model("CrossLibraryForm", CrossLibraryFormSchema);