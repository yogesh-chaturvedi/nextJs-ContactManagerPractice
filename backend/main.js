const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();
require('./modals/db')
const authRoutes = require('./routes/authRoute')
const contactRoutes = require('./routes/contactRoutes')


const port = process.env.PORT | 8000

app.use(bodyParser.json())

app.use(cors({
    origin: "http://localhost:3000"
}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// helps our call in navigation 
app.use('/api/auth', authRoutes)
app.use('/api/contacts', contactRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})