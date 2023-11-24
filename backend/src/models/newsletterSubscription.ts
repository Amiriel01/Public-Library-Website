import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NewsletterSubscriptionSchema = new Schema({
    email: {
        type: String,
        match: /.+\@.+\..+/,
        required: true,
    },
});

export default mongoose.model("NewsletterSubscription", NewsletterSubscriptionSchema);