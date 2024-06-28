const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    let user = new User({
        fullName: req.body.fullname,
        userName: req.body.username,
        emailOrMobile: req.body.mobileemail,
    });
    try {
        user.password = await bcrypt.hash(req.body.password, 10)
        const savedUser = await user.save();
        const token = jwt.sign({ userId: user._id }, 'terces')  // add expiresIn if needed
        res.status(201).json({savedUser, token});
    } catch (e) {
        res.status(400).json({ error: e.message});
    }
}; 

// changing the name of the username var to userinfo changes the value 
const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ userName: username });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect Password" });
        }
        const token = jwt.sign({userId:user._id}, 'terces')
        return res.status(201).json({ 
            message: 'Logged In Successfully', 
            fullName:user.fullName,
            token
        }); 

    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};


module.exports = {
    signup,
    login
};
