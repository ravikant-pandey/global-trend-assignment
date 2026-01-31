import express from "express";
import {
  registerUser,
  loginUser,
  getUser,
  logoutUser,
} from "../controllers/user.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current-user", protect, getUser);
router.post("/logout", protect, logoutUser);

export default router;
