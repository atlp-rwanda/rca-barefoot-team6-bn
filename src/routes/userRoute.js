import { Router } from "express";
import { createUser, verifyEmail, welcomeNewUser } from "../controllers/userController";
const router = Router();
router.post("/", createUser)
router.use("/verify-email/:token", verifyEmail)
router.get("/verify-email/:token", welcomeNewUser)


export default router