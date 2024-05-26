const {z} = require('zod')

const SignUpSchema = z.object({
    username:z
    .string({required_error:"name is required"})
    .trim()
    .min(3,{message:"name must be atleast 3 characters"})
    .max(12,{message:"charcter must be less than 12"}),
     email:z
     .string({required_error:"email is required"})
     .email({message:"invalid email"})
     .trim(),
     phone:z
     .string()
     .trim()
     .min(3,{message:"phoneNo must be atleast 3 characters"})
     .max(11,{message:"phoneNo must be less than 11"}),
     password:z
     .string({required_error:"password is required"})
     .min(3,{message:"password must be atleast 3 characters"})
     .max(8,{message:"password must be less than 8"}),

});
module.exports = SignUpSchema;