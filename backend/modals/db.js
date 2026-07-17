const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL)
    .then((res) => {
        console.log("db connected successfully")
    })
    .catch((error) => {
        console.log("db connection failed")
    })