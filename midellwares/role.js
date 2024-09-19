const jwt = require("jsonwebtoken")

async function auth(req , res ,next){
    console.log(req.headers.authorization.split(" ")[1])
    const token = req.headers.authorization.split(" ")[1]
    const scretjwt = "hello"

    try{
    if(!token){
        return  res.status(401).json({ message: "token not valid" })
    }
    const decode = await jwt.verify(token , scretjwt)
   console.log("ss",decode);
   const user_id = decode.id
   req.user_id = user_id
   next()
     
   
    }catch(err){
        return res.status(401).json({ message: "Unauthorized" });
    }

}
module.exports  = {
    auth
}