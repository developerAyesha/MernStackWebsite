const jwt = require("jsonwebtoken");
const { User } = require('../models/user.models');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: "Unauthorized HTTP, Token not provided" });
    }
    console.log("token from middleware", token);

    const jwtToken = token.replace("Bearer", "").trim();
    console.log("user token", jwtToken);
    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        console.log("Token verified:", isVerified);
        
        const userData = await User.findOne({ email: isVerified.email });
        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log("User details:", userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;
        next();
    } catch (error) {
        console.error("Error in getting user data from DB:", error.message);
        return res.status(401).json({ message: "Unauthorized HTTP, Token invalid or expired" });
    }
};

module.exports = authMiddleware;
