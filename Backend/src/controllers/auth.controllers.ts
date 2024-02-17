import { User } from "../models/user_model"
import { Request, Response , NextFunction } from "express"
import { errorHandler } from "../utils/error"
import signupvalid from "../Validation/signupvalid";
import { hashedpass } from "./passhash";


export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {username,email,password} = req.body;
        const isValid = await signupvalid.safeParse(req.body);
        if(!isValid){
            next(errorHandler(400, "Invalid Input"));
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