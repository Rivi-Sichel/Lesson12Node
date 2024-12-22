import {model ,Schema}from "mongoose";

const teacherSchema=Schema({
    firstName:String,
    lastName:String,
    address:String
})

const courseSchema=Schema({
    name:String,
    type:[String],
    price:Number,
    openDate:Date,
    teacher:teacherSchema

})

export const courseModel=model("course",courseSchema);

