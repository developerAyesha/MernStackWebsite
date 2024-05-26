const validate = (schema)=> async (req,res,next)=>{
    try {
        const ParseBody= await schema.parseAsync(req.body);
        req.body=ParseBody;
        next()
    } catch (error) {
        res.status(400).json({message:error})
    }
}
module.exports=validate;