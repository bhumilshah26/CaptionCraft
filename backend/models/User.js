const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {type:String, required:true},
    userName: {type:String, unique:true, required:true},
    emailOrMobile: {type:String, unique:true, required:true},
    password: {type:String, required:true}
})


module.exports = mongoose.model('User', userSchema)


// mongoose.connect, mongoose.model, mongoose.Schema