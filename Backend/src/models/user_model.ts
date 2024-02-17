import mongoose from "mongoose";
mongoose.connect("")

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
