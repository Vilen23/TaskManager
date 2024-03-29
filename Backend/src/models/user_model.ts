import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
mongoose.connect("mongodb+srv://Shivam:itsbeens0long@cluster0.ezyirm3.mongodb.net/TaskManager")
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const todoScheam = new mongoose.Schema({
    title: String,
    description: String,
    done : Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

})

export const Todo = mongoose.model("Todo", todoScheam)
export const User = mongoose.model("User", userSchema)
