const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')
const imageRoutes = require('./routes/imageRoutes')
const getusersRoutes = require('./routes/getuserRoute')
dotenv.config()

const app = express()
const PORT = process.env.PORT
const mongoURI = process.env.MONGODB_URI

// promises
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {console.log('DB connected')})
.catch(err => console.log(err))

app.use(express.json()) // request body to be json format
app.use(cors()) // cors middleware(access resources from 3000 to 5000 and vice-versa)
app.use('/users', userRoutes)
app.use('/generate', imageRoutes)
app.use('/getusers', getusersRoutes)
app.listen(PORT, () => {console.log(`Server connected to port http://localhost:${PORT}`)})
