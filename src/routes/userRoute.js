import { Router } from "express";
import { createUser, getUsers, verifyEmail, welcomeNewUser } from "../controllers/userController";
import { registerDefinition } from 'swaggiffy';
const router = Router();

router.post("/", createUser)
router.use("/verify-email/:token", verifyEmail)
router.get("/verify-email/:token", welcomeNewUser)
router.get("/", getUsers)

registerDefinition(router, { tags: 'User', mappedSchema: 'User', basePath: '/users' });
export default router