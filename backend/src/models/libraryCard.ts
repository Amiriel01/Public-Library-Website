import mongoose from "mongoose";
const Schema = mongoose.Schema;

const LibraryCardSchema = new Schema({
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
    additional_information: {
        type: String,
    },
    card_issued: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("LibraryCard", LibraryCardSchema);
