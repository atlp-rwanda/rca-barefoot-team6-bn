const express = require("express");
const { createUser, verifyEmail, getVerifiedEmail } = require("../controllers/userController");
const router = express.Router();
router.post("/", createUser)
router.use("/verify-email/:token", verifyEmail)
router.get("/verify-email/:token", getVerifiedEmail)


module.exports = router