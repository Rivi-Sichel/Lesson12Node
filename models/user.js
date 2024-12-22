import {model ,Schema}from "mongoose";
const userSchema=Schema({
    userName:String,
    password:String,
    email:String,
    phone:String
})
export const userModel=model("user",userSchema)