const Users = require('../models/User')


const getusers = async (req, res) => {
    const { userid } = req.query
    try{
        const User = await Users.find({}, {userName:1, _id:0, fullName:1}).limit(5) // find(query, projection => field u want in response)
        const users = User.filter((current) => current.userName !== userid)
        return res.status(201).json({message:'response ok', users})
    }
    catch(e) {
        return res.status(404).json({error:e.message})
    }
}

module.exports = getusers
