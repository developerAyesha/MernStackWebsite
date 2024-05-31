const { User } = require('../models/user.models');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    try {
        console.log('Registration Request Body:', req.body);
        const { username, email, phone, password } = req.body;

        if (!username || !email || !phone || !password) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        // No need to hash the password here, as it will be done in the pre-save hook
        const userCreated = await User.create({ 
            username, 
            email, 
            phone, 
            password 
        });

        // Verify immediately after creation
        const savedUser = await User.findOne({ email: email });
        console.log('Saved User Details after Creation:', savedUser);

        const token = await userCreated.generateToken();
        console.log('Generated Token during Registration:', token);

        res.status(201).json({
            msg: "Registration Successful",
            mytoken: token,
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ 
            message: "Internal server error", 
            error: error.message 
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Login Request Body:', { email, password });

        const userExist = await User.findOne({ email });
        console.log('User Exists:', userExist);

        if (!userExist) {
            return res.status(400).json({ user: "Invalid user" });
        }

        console.log('Stored Hashed Password:', userExist.password);

        const isPasswordCorrect = await bcrypt.compare(password, userExist.password);
        console.log('Is Password Correct:', isPasswordCorrect);

        if (!isPasswordCorrect) {
            console.log(`Password mismatch: Input - ${password}, Stored Hash - ${userExist.password}`);
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = await userExist.generateToken();
        console.log('Generated Token during Login:', token);

        res.status(200).json({ 
            message: "User successfully logged in", 
            token,
            userId: userExist._id.toString(),
        });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ 
            message: "Internal server error", 
            error: error.message 
        });
    }
};


// user data get logic

const user=async(req,res)=>{
 try {
    console.log("user controller running");
    const userData=req.user;
    console.log(userData);
    return res.status(200).json({userData})
    
 } catch (error) {
    console.log("error from iser route",error);
 }
}
module.exports = { register, login ,user};
