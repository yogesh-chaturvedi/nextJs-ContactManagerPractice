"use server"
import axios from "axios";
import { ContactInterface } from "../_types/contactTypes";
import { ContactInputs } from "../_component/ContactForm";

const API_KEY = process.env.API_URL;

interface ContactApiInterface {
    message: string,
    success: boolean,
    userContacts?: ContactInterface[]
}

// fetch 
export const getContacts = async () => {
    try {
        const response = await axios<ContactApiInterface>({
            method: 'get',
            url: `${API_KEY}/api/contacts/fetchContacts`,
        })

        if (response.data.success) {
            // console.log(response.data.message);
            return response.data.userContacts
        }
    }
    catch (error) {
        throw error
    }
}

// single contact
export const fetchSingleContacts = async (contactId: string) => {

    try {
        const response = await axios<ContactApiInterface>({
            method: 'get',
            url: `${API_KEY}/api/contacts/singleContacts`,
            data: { contactId }
        })

        if (response.data.success) {
            // console.log("response", response.data.message);
            return response.data.userContacts
        }
    }
    catch (error) {
        console.error("singleContacts failed", error)
    }
}

// create
export const createContacts = async (UserId: string, data: ContactInputs) => {

    try {
        const response = await axios<ContactApiInterface>({
            method: 'post',
            url: `${API_KEY}/api/contacts/createContacts`,
            data: { data, UserId }
        })

        if (response.data.success) {
            // console.log("response", response.data.message);
            return response.data.userContacts
        }
    }
    catch (error) {
        console.error("createContacts failed", error)
    }
}

// edit
export const editContacts = async (contactId: string, newContact: string) => {

    try {
        const response = await axios<ContactApiInterface>({
            method: 'put',
            url: `${API_KEY}/api/contacts/editContacts`,
            data: { contactId, newContact }
        })

        if (response.data.success) {
            console.log("response", response.data.message);
            // return response.data.userContacts
        }
    }
    catch (error) {
        console.error("createContacts failed", error)
    }
}

// delete
export const deleteContacts = async (contactId: string) => {
    try {
        const response = await axios<ContactApiInterface>({
            method: 'delete',
            url: `${API_KEY}/api/contacts/deleteContacts`,
            data: { contactId }
        })

        if (response.data.success) {
            // console.log(response.data.message);
            return response.data.userContacts
        }
    }
    catch (error) {
        console.error("deleteContacts failed", error)
    }
}