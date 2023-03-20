import { Router } from "express";
import { createUser, getUsers, verifyEmail, welcomeNewUser } from "../controllers/userController";
const router = Router();

router.post("/", createUser)
router.use("/verify-email/:token", verifyEmail)
router.get("/verify-email/:token", welcomeNewUser)
router.get("/", getUsers)

export default router