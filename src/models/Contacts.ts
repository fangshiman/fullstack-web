import * as mongoose from "mongoose";
import { validateEmail } from "../functions";
import { Contact } from "../types";

const ContactSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        required: [true, 'First Name is required'],
        maxlength: 25,
    },
    lastname: {
        type: String,
        trim: true,
        required: [true, 'Last Name is required'],
        maxlength: 25,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        maxlength: 50,
    },
    message: {
        type: String,
        trim: true,
        required: [true, 'Message field is required'],
        maxlength: 500,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model<Contact>('Contacts', ContactSchema);