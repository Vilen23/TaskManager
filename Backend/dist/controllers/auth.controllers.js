"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const user_model_1 = require("../models/user_model");
const signupvalid_1 = __importDefault(require("../Validation/signupvalid"));
const passhash_1 = require("./passhash");
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const find = yield user_model_1.User.findOne({ $or: [{ email }, { username }] });
        if (find) {
            res.status(400).json({ message: "User Already Exists" });
            return;
        }
        const isValid = yield signupvalid_1.default.safeParse(req.body);
        if (!isValid) {
            res.status(400).json({ message: "Invalid Input" });
            return;
        }
        const hashpass = yield (0, passhash_1.hashedpass)(password);
        const user = new user_model_1.User({
            username,
            email,
            password: hashpass
        });
        yield user.save();
        res.status(201).json({ message: "User Created" });
    }
    catch (error) {
        next(error);
    }
});
exports.signup = signup;
