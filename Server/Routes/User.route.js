const express = require ('express')
const {home}=require('../contollers/Home.contoller')
const {register,login}=require('../contollers/user')
const Router = express.Router();
const validate = require('../middleware/validate.middlware')
const SignUpSchema = require('../Validators/user.validator')
Router.route("/").get(home)
Router.route("/Register").post(validate(SignUpSchema),register);
Router.route("/login").post(login)

module.exports=Router;
