import mongoose from "mongoose";
mongoose.connect("mongodb+srv://Shivam:itsbeens0long@cluster0.ezyirm3.mongodb.net/TaskManager")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
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
