import { Contact } from "interfaces";
import axiosOrder from "./axios-orders";
import { toastMessage } from './functions';

const axios = axiosOrder();

export const addContact = async (values: Contact) => {
    const { status, data } = await axios.post('/contacts', values);
    if ([200, 201].includes(status)) {
        toastMessage("success", "Contact successfully added");
        return data;
    }
    return toastMessage("error", status === 400 ? 
        "Error: Invalid Request" : 
        "Error: Network connection");
}