const express = require ('express');
const { post } = require('./User.route');
const router = express.Router();
const contactMe =require('../contollers/contact.controller.js')

router.post('/contact', contactMe)
module.exports =router