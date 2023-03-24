<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
import { Router } from 'express';
import {
  createUser,
  getUsers,
  verifyEmail,
  welcomeNewUser,
  initiatePasswordReset,
  resetPassword
} from '../controllers/userController';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Router } from "express";
import { createUser, getUsers, verifyEmail, welcomeNewUser } from "../controllers/userController";
<<<<<<< HEAD
>>>>>>> 3fa7883 (Separated Functions)
=======
>>>>>>> e7caa7b (Removed unnecessary package)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
const router = Router();

router.post('/', createUser);
router.use('/verify-email/:token', verifyEmail);
router.get('/verify-email/:token', welcomeNewUser);
router.get('/', getUsers);
router.post('/request-password-reset', initiatePasswordReset);
router.post('/reset-password/:token', resetPassword);
export default router;
<<<<<<< HEAD
=======
import { Router } from "express";
import { createUser, getUsers, verifyEmail, welcomeNewUser } from "../controllers/userController";
const router = Router();
router.post("/", createUser)
router.use("/verify-email/:token", verifyEmail)
router.get("/verify-email/:token", welcomeNewUser)
router.get("/", getUsers)

<<<<<<< HEAD
<<<<<<< HEAD

export default router
>>>>>>> 6599e8e (User Registration and Email Verification)
=======
const express = require("express");
const { createUser, verifyEmail, getVerifiedEmail } = require("../controllers/userController");
const router = express.Router();
=======
import { Router } from "express";
import { createUser, getUsers, verifyEmail, welcomeNewUser } from "../controllers/userController";
const router = Router();
>>>>>>> 5b90360 (User Register Works and refactoring)
router.post("/", createUser)
router.use("/verify-email/:token", verifyEmail)
router.get("/verify-email/:token", welcomeNewUser)
router.get("/", getUsers)


<<<<<<< HEAD
module.exports = router
>>>>>>> 72acd8f (Refactoring)
=======
export default router
>>>>>>> 5b90360 (User Register Works and refactoring)
=======
export default router
>>>>>>> 3fa7883 (Separated Functions)
=======
export default router
>>>>>>> e7caa7b (Removed unnecessary package)
=======
const router = Router();

router.post('/', createUser);
router.use('/verify-email/:token', verifyEmail);
router.get('/verify-email/:token', welcomeNewUser);
router.get('/', getUsers);
router.post('/request-password-reset', initiatePasswordReset);
router.post('/reset-password/:token', resetPassword);
export default router;
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
