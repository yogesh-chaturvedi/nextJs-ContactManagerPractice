const express = require('express')
const mongoose = require("mongoose")
const router = express.Router();
const contactModel = require('../modals/contact')


// login 
router.get("/fetchContacts", async (req, res) => {
    try {

        const contacts = await contactModel.find();
        if (!contacts) {
            return res.status(404).json({ message: 'not found', success: false })
        }

        res.status(200).json({ message: 'contact fetched successfully', success: true, userContacts: contacts })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'fetchContacts failed', success: false })
    }
})

// single contact 
router.get("/singleContacts", async (req, res) => {
    try {
        const { contactId } = req.body;
        const contact = await contactModel.findById({ _id: contactId });

        // console.log("sigle contact", contact)

        if (!contact) {
            return res.status(404).json({ message: 'not found', success: false })
        }

        res.status(200).json({ message: 'singleContacts fetched successfully', success: true, userContacts: contact })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'singleContacts failed', success: false })
    }
})

// create 
router.post("/createContacts", async (req, res) => {
    try {
        const { UserId, data } = req.body;
        // console.log(req.body)

        const newContact = new contactModel({
            userId: UserId,
            phoneNumber: data.number
        })
        await newContact.save();
        res.status(200).json({ message: 'contact added successfully', success: true })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'add contact failed', success: false })
    }
})

// edit
router.put("/editContacts", async (req, res) => {
    try {
        const { contactId, newContact } = req.body;
        // console.log("editcontact", req.body)

        const contact = await contactModel.findByIdAndUpdate({ _id: contactId })
        contact.phoneNumber = newContact;
        await contact.save();
        res.status(200).json({ message: 'editContacts added successfully', success: true })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'editContacts contact failed', success: false })
    }
})

// delete
router.delete("/deleteContacts", async (req, res) => {
    try {
        const { contactId } = req.body;
        // console.log("contactId", contactId)
        const contact = await contactModel.findByIdAndDelete({ _id: contactId })

        res.status(200).json({ message: 'contact deleted successfully', success: true })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'deleteContacts failed', success: false })
    }
})

module.exports = router