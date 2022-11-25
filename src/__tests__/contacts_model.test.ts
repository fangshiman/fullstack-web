import dotenv from "dotenv";
dotenv.config({ path: './config/config.env' });
import connectDB from "../../config/db";
import Contacts from "../models/Contacts";
import { DUMMY_PAYLOAD } from "./app_e2e.test";

connectDB();

describe('Contacts model test', ()=>{
    beforeEach(()=>{
        Contacts.deleteMany({});
    })

    it('has a module', ()=>{
        expect(Contacts).toBeDefined();
    });

    describe('get contacts', ()=>{
        it('gets contacts', async ()=>{
            const contact = new Contacts(DUMMY_PAYLOAD);
            await contact.save();
            const result = await Contacts.find();
            expect(result).toBeDefined();
        })
    })

    describe('add a contact', ()=>{
        it('add a contact', async ()=>{
            const contact = new Contacts(DUMMY_PAYLOAD);
            const result = await contact.save();
            expect(result.firstname).toEqual(DUMMY_PAYLOAD.firstname);
        })
    })
})