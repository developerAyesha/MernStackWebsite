const express = require ('express')
const {home}=require('../contollers/Home.contoller')
const {register,login,user}=require('../contollers/user')
const authMiddleware=require('../middleware/authMiddleware')
const Router = express.Router();
const validate = require('../middleware/validate.middlware')
const SignUpSchema = require('../Validators/user.validator')
Router.route("/").get(home)
Router.route("/Register").post(validate(SignUpSchema),register);
Router.route("/login").post(login)
Router.route("/user").get(authMiddleware,user);
module.exports=Router;
