import { Router } from "express";
import {add_signUp,getAllUsers,getById,getUserByUserNameAndPassword_login,update} from "../controllers/user.js"

const router=Router()
router.get("/", getAllUsers);
router.get("/:id", getById);
router.post("/login", add_signUp);
router.post("/login", getUserByUserNameAndPassword_login);
router.put("/:id", update);

export default router;

