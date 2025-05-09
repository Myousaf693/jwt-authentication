const { json } = require("body-parser");
const User = require("../model/userSchema")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');




// function jsonwebtoken

async function genToken(id){

    try {
        const token = jwt.sign({_id: id}, process.env.JWT_SECRET)        
        return token
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
        
    }
}
// function for hashing password 
async function genHashPassword(password){
    try {
        const hPassword = await bcrypt.hash(password, 10);
        return hPassword;
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
        
    }
}

// controller for create user 
const createUser=async(req, res)=>{
try {
    const hashPassword = await genHashPassword(req.body.password)
const user = new User({
    name:req.body.name,
    email:req.body.email,
    password:hashPassword,
    age:req.body.age,
    // image:req.file.filename,
    role:req.body.role
});
const userData = await User.findOne({email:req.body.email});
if(userData){
    res.status(200).json({
        success:false,
        message: "User Already Exist."
    })
}else{
    const newUser = await user.save();
    res.status(200).json({
        success:true,
        message: "User Created Successfully",
        data: newUser
    })
}
} catch (error) {
    res.status(400).json({
        success: false,
        message: error.message
    })
    
}
}
// controller for user login 
const loginUser = async(req, res)=>{
    try {
        const {email, password} = req.body;
        const userData = await User.findOne({email:email})
        if (userData) {
            const verifyPassword = await bcrypt.compare(password, userData.password);
            if (verifyPassword) {
                const tokenData = await genToken(userData._id)
                const responseData = {
                    name: userData.name,
                    password: userData.password,
                    email: userData.email,
                    age: userData.age,
                    // image: userData.image,
                    role:userData.role,
                    token: tokenData

                }

                res.status(200).json({
                    success: true,
                    message: "User LoggedIn successfully", 
                    data: responseData
                })
            } else {
                res.status(400).json({
                    success: false,
                    message: "Incorrect Password"
                })
            }
        } else {
            res.status(200).json({
                success: false,
                message: "Invalid Email Address"
            })
        }
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
// controller for get all users
const allUsers = async(req, res)=>{
try {
    const usersData = await User.find({})    
    res.status(200).json({
        success:true,
        message: "All users Get successfully",
        data:usersData
    })
} catch (error) {
    res.status(400).json({
        success:false,
        message: error.message
    })
    
}
}








module.exports = {createUser, loginUser, allUsers}