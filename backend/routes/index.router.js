import { Router } from "express";
import { getUsers, getusersParams, postUsers } from "../controllers/user.controller.js";



const router = Router();
//users management
router.get('/user', getUsers);
router.get("/user/:id", getusersParams);
router.post('/user', postUsers);


export default router;