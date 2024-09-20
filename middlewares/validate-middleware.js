const validate = (schema) => async (req, res, next)=>{

   try {
    const parsebody = await schema.parseAsync(req.body);
    req.body = parsebody;
    next();
   } catch (err) {
    
    const msge = err.errors[0].message;
    res.json({message:msge })
   }
}
module.exports = validate;