const validate = (schema) => async (req, res, next)=>{

   try {
    const parsebody = await schema.parseAsync(req.body);
    req.body = parsebody;
    next();
   } catch (err) {
    
    const message = "fill the input properly";
    const extraDetails =  err.errors[0].message;
    const status = 400;
    const error = {
      status,
      message,
      extraDetails

    }
    next(error); 

   }
}
module.exports = validate;