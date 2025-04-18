import mongoose, { model, models } from "mongoose";

const { Schema } = mongoose;



const NewsletterSchema = new Schema({
    email: {
        type: Schema.Types.String,
        required: true,
    }
}, {
    timestamps: true
});

const Newsletter = models.Newsletter || model('Newsletter', NewsletterSchema);

export default Newsletter;
