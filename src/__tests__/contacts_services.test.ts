import dotenv from "dotenv";
dotenv.config({ path: './config/config.env' });
import Services from "../services/contacts.services";
import sinon from "sinon";

describe('Services test', ()=>{
    it('has a module', async ()=>{
        expect(Services).toBeDefined();
    })

    describe('list downloads test', ()=>{
        it('lists downloads', async ()=>{
            const MockModel = {
                find: sinon.spy()
            }
            const services = Services(MockModel);
            services.getContacts();
            const expected = true;
            const actual = MockModel.find.calledOnce;
            expect(actual).toEqual(expected);
        })
    })
})