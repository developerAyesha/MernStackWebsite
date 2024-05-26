const {Schema, model} = require("mongoose")


const contactSchema= new Schema({
        username:{
            type:String,
            reuired:true
        },
        email:{
            type:String,
            reuired:true
        },
        message:{
            type:String,
            reuired:true
        }
},{
    timestamps:true
});

const Contact = new model("Contact",contactSchema);
module.exports = Contact;