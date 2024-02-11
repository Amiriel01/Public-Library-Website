import mongoose from "mongoose";
const Schema = mongoose.Schema;

//create staff schema
const StaffSchema = new Schema({
    image: {
        data: Buffer,
        contentType: String,
    },
    title: {
        type: String,
    },
    name: {
        type: String,
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
        match: /.+\@.+\..+/,
    }
})

export default mongoose.model("Staff", StaffSchema);