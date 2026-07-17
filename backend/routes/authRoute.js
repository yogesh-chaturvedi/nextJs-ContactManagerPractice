const express = require('express')
const mongoose = require("mongoose")
const router = express.Router();
const userModel = require('../modals/user')


// login 
router.post("/login", async (req, res) => {
    try {

        const { email, password } = req.body;

        const isPresent = await userModel.findOne({ email: email });

        if (!isPresent) {
            return res.status(404).json({ message: 'email not found', success: false })
        }

        if (isPresent.password !== password) {
            return res.status(404).json({ message: 'wrong password', success: false })
        }

        // console.log("isPresent", isPresent)
        res.status(200).json({
            message: 'login successfully', success: true, user: {
                id: isPresent._id,
                userName: isPresent.userName,
                email: isPresent.email,
            },
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'login failed', success: false })
    }
})



module.exports = router