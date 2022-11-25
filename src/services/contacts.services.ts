import { Request, Response } from "express";
import { Document } from "mongoose";
import Contacts from "../models/Contacts";

const getContacts = (model: typeof Contacts) => async () => {
    try {
        const result: Document[] = await model.find();
        return result ? result : [];
    } catch (err){
        return false;
    }
}

const addContacts = (model: typeof Contacts) => async (req: Request) => {
    try {
        const { firstname, lastname, email, message } = req.body;
        const result: Document = await model.create({
            firstname,
            lastname,
            email,
            message,
        });
        return result;
    } catch (err){
        return false;
    }
}

const errorCheck = () => (err: { 
    name: string; 
    errors: { message: string }[] 
}, res: Response) => {
    if (err.name === "ValidationError") {
        const messages = Object.values(err.errors).map((val: { message: string })=>val.message);
        return res.status(400).json({
            success: false,
            error: messages
        });
    }
    return res.status(500).json({
        success: false,
        error: "SERVER ERROR"
    });
}


export default (Contacts: any) => {
    return {
        getContacts: getContacts(Contacts),
        addContacts: addContacts(Contacts),
        errorCheck: errorCheck()
    }
}