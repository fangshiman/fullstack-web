import dotenv from "dotenv";
dotenv.config({ path: './config/config.env' });
import request from 'supertest';
import connectDB from "../../config/db";
import Contacts from "../models/Contacts";
import app from "../app";

connectDB();

const API_VERSION = "/api/v1";

export const DUMMY_PAYLOAD = { 
    firstname: 'Fangshi',
    lastname: 'man',
    email: 'fangshiman@gmail.com',
    message: 'Hitori no shita',
};

describe('App test', ()=>{

    beforeAll(() => {
        Contacts.deleteMany({});
    });

    it('has a module', ()=>{
        expect(app).toBeDefined();
    })

    test('/contacts (GET) SUCCESS', ()=>{
        return request(app)
            .get(`${API_VERSION}/contacts`)
            .expect(200);
    });

    test('/contacts (POST) SUCCESS', async ()=>{
        const result = await request(app)
            .post(`${API_VERSION}/contacts`)
            .set('Accept', 'application/json')
            .send(DUMMY_PAYLOAD);

        expect(result.status).toBe(201);

        expect(result.body.success).toBe(true);
    });

    test('400 (POST) - VALIDATION ERROR', async ()=>{
        const payload = {
            firstname: DUMMY_PAYLOAD.firstname,
            lastname: DUMMY_PAYLOAD.lastname,
            message: DUMMY_PAYLOAD.message,
        }
        const result = await request(app)
            .post(`${API_VERSION}/contacts`)
            .set('Accept', 'application/json')
            .send(payload);
        expect(result.status).toBe(400);

        expect(result.body.success).toBe(false);
    });

    test('404 (POST) - wrong endpoint', ()=>{
        return request(app)
            .post(`${API_VERSION}/fail`)
            .expect(404);
    });

    test('404 (POST) - wrong url', ()=>{
        return request(app)
            .post(`/fail`)
            .expect(404);
    });

    test('404 (POST) - wrong version number', ()=>{
        return request(app)
            .post(`/contacts`)
            .expect(404);
    });
})