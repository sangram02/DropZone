const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { use } = require("../routes/auth");
dotenv.config();

const verifyToken = (req,res,next) =>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split("")[1];
        jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
            if(err){
                res.status(403).json("Token is not valid");
            }
            req.user = user;
            next();
        });
    }else{
        res.status(401).json("you are not authenticated");
    }
};

const verifyTokenandAuthorization = (req,res,next) =>{
    verifyToken(req,res,()=>{
        if(req.user.role == "admin"){
            next()
        }else{
            res.status(403).json("You are not permitted to do this operation")
        }
    });
}

module.exports = {verifyToken}