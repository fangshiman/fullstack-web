import { Router } from "express";
import { getContacts, addContacts } from "../controllers/contacts.controllers";

const router = Router();

const routes = router
                .get('/', getContacts)
                .post('/', addContacts);

export default routes;