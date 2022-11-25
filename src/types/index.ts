import * as mongoose from "mongoose";

export interface Contact extends mongoose.Document {
    firstname: string;
    lastname: string;
    email: string;
    message: string;
}