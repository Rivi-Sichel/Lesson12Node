import { courseModel } from "../models/course.js";

export const getAllBooks=async(req,res)=>{
    try{
        let data=await courseModel.find()
        res.json(data)
    }
    catch(err){
        console.log(err)
        res.status(400).json({title:"cannog get all",message:err.message})
    }
}

export const getById=async(req,res)=>{
    let {id}=req.params
    try{
        let data=await courseModel.findById(id)
        if(!data)
            return res.status(404).json({title:"cannog find by id",message:"course with such id not found "})
        res.json(data)
    }
    catch(err){
        console.log(err)
        res.status(400).json({title:"cannog find by id",message:err.message})
    }
}

export const update=async(req,res)=>{
    let {id}=req.params
    try{
        let data=await courseModel.findByIdAndUpdate(id,body,{new:true})
        if(!data)
            return res.status(404).json({title:"cannog find by id",message:"course with such id not found "})
        res.json(data)
    }
    catch(err){
        console.log(err)
        res.status(400).json({title:"cannog find by id",message:err.message})
    }
}

export const deleteById=async(req,res)=>{
    let {id}=req.params
    try{
        let data=await courseModel.findByIdAndDelete(id)
        if(!data)
            return res.status(404).json({title:"cannog delete by id",message:"course with such id not found "})
        res.json(data)
    }
    catch(err){
        console.log(err)
        res.status(400).json({title:"cannog find by id",message:err.message})
    }
}

export const add=async(req,res)=>{
    let {body}=req.params
    if(!body.name||!body.price)
        return(res.json({title:"cannot add",message:"missing parameters"}))
    try{
        let newcourse=new courseModel(body);
        let data=await newcourse.save()
        res.json(data)
    }
    catch(err){
        console.log(err)
        res.status(400).json({title:"cannog find by id",message:err.message})
    }
}