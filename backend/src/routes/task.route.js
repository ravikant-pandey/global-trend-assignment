import express from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/task.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create-task", protect, createTask);
router.put("/update-task/:id", protect, updateTask);
router.get("/get-tasks", protect, getTasks);
router.delete("/delete-task/:id", protect, deleteTask);
export default router;
