import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs'

export const signup = async(req, res, next) => {
    const {username, email, password}= req.body

    const isValidator= await User.findOne({email})

    if(isValidator)
    {
        return  next(errorHandler(404, "User already exist"))
        
    }

    const hashedPassword= bcryptjs.hashSync(password, 10)

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    })
    
    try
    {
        await newUser.save()
        res.status(201).json({
            success:true,
            message: "User created successfully"
        })
    }
    catch(error)
    {
        next(error)
    }

}