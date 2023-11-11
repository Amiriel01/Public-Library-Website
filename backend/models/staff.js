//require mongoose
const mongoose = require("mongoose");
//define schema
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

module.exports = mongoose.model("Staff", StaffSchema);