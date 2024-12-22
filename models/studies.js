import {Schema,model,Types} from "mongoose";
import { courseSchema } from "./course.js";

const studiesSchema=Schema({
    date:{type:Date,default:new Date()},
    userId:{
        type: Types.ObjectId,
        ref:"user"
    },
    course:courseSchema,
    isDone:{type:Boolean,default:false}
})
export const studiesModel =model("studies",studiesSchema)