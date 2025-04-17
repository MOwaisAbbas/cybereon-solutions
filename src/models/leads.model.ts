import mongoose, { model, models } from "mongoose";

const { Schema } = mongoose;

const LeadSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    email: {
        type: Schema.Types.String,
        required: true,
    },
    message: {
        type: Schema.Types.String,
        required: true,
    },
}, {
    timestamps: true
})


const Lead = models.Lead || model('Lead', LeadSchema);


export default Lead;