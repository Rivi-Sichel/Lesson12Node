// import {studiesModel} from "../models/studies.js"
import { userModel } from "../models/user.js"

export const getAllStudies = async (req, res) => {
    try {
        let result = await studiesModel.find();
        res.json(result)
    }
    catch (err) {
        res.status(400).json({ title: "cannot get all ", message: err.message })

    }
}
export const getStudiesById = async (req, res) => {
    try {
        let data = await studiesModel.findById(req.params.id);
        if (!data)
            return res.status(404).json({ title: "cannot find by id", message: "studies with such id not found" })
        res.json(data)
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ title: "cannot find by id", message: err.message })
    }
}
// export const getStudieByUserId = async (req, res) => {
//     let { userid } = req.params;
//     try {
//         let data = await studiesModel.find({ userId: userid });
//         if (!data)
//             return res.status(404).json({ title: "cannot find by id", message: "user with such id not found" })
//         res.json(data)
//     }
//     catch (err) {
//         console.log(err)
//         res.status(400).json({ title: "cannot update user", message: err.message })
//     }
// }

export const addStudies = async (req, res) => {
    let { body } = req;
    if (!body.studiesid||!isDone||body.course)
        return res.status(404).json({ title: "missing parameters", message: "user ,mail,passord are required" })
    try {

        let studies = new studiesModel(req.body);
        await studies.save();
        res.json(studies)
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ title: "cannot add", message: err.message })
    }
}
export const DoneCourseById = async (req, res) => {
    try {
        let result = await studiesModel.findByIdAndUpdate(req.params.id, { isDone: true }, { new: true })
        if (!result)
            return res.status(404).json({ title: "missing parameters", message: "user ,mail,passord are required" })
        res.json(result)

    }
    catch (err) {
        console.log(err)
        res.status(400).json({ title: "cannot add", message: err.message })
    }

}



