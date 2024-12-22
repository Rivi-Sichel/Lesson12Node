import { Router } from "express";

import {getAllStudies,getStudiesById,addStudies,DoneCourseById, } from "../controllers/studies.js";


const router=Router();

router.get("/",getAllStudies)
router.get("/:id",getStudiesById)
// router.get("/:id",getStudieByUserId)
router.put("/",addStudies)
router.post("/",DoneCourseById)

export default router
