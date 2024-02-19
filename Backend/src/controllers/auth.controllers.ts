import { User } from "../models/user_model"
import { Request, Response , NextFunction } from "express"
import { errorHandler } from "../utils/error"
import signupvalid from "../Validation/signupvalid";
import { hashedpass } from "./passhash";


export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {username,email,password} = req.body;
        const find = await User.findOne({$or:[{email},{username}]})
        if(find){
            res.status(400).json({message: "User Already Exists"});
            return;
        }
        const isValid = await signupvalid.safeParse(req.body);
        if(!isValid){
            res.status(400).json({message: "Invalid Input"}); 
            return;
        }
        const hashpass = await hashedpass(password);
        const user = new User({
            username,
            email,
            password: hashpass
        })
        await user.save();
        res.status(201).json({message: "User Created"});
    } catch (error) {
        next(error)
    }
}