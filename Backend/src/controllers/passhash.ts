import bcrypt from 'bcrypt';
import { errorHandler } from '../utils/error';

export const hashedpass = async (password:string)=>{
    try {
        return await bcrypt.hash(password, 12);
    } catch (error) {
        throw errorHandler(500, "Internal Server Error");
    }
}