import { Router } from "express";
import { add, deleteById, getAllBooks, getById, update } from "../controllers/course.js"

const router = Router();
router.get("/", getAllBooks)
router.get("/:id", getById)
router.delete("/:id", deleteById)
router.post("/", add)
router.put("/", update)
export default router;