import { Request, Response } from "express";
import Services from "../services";

export const getContacts = async (_req: Request, res: Response) => {
    try {
        const result = await Services.getContacts();
        return res.status(200).json({
            success: true,
            data: result,
        })
    } catch(err: any) {
        return Services.errorCheck(err, res);
    }
}

export const addContacts = async (req: Request, res: Response) => {
    try {
        const { firstname, lastname, email, message } = req.body;
        if (!firstname || !lastname || !email || !message) {
            return res.status(400).json({ success: false })   
        }
        const contact = await Services.addContacts(req);
        return res.status(201).json({
            success: true,
            data: contact,
        })
    } catch(err: any){
        return Services.errorCheck(err, res);
    }
}