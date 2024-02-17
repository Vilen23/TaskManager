"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Todo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
mongoose_1.default.connect("mongodb+srv://Shivam:itsbeens0long@cluster0.ezyirm3.mongodb.net/TaskManager");
const userSchema = new mongoose_1.default.Schema({
    username: {
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
});
const todoScheam = new mongoose_1.default.Schema({
    title: String,
    description: String,
    done: Boolean,
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User"
    }
});
exports.Todo = mongoose_1.default.model("Todo", todoScheam);
exports.User = mongoose_1.default.model("User", userSchema);
