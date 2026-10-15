const logger = (req,res,next) => {
    const date = new Date();
 
    console.log(`API with ENDPOINT : and METHOD: ${req.method} was called at: ${date.toLocaleString()}`);
    next();
}


module.exports= logger