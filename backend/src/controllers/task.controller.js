import Task from "../models/task.model.js";

// create task
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // user comes from auth middleware
    const userId = req.user._id;

    const task = await Task.create({
      title,
      description,
      user: userId,
    });

    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// update task
const updateTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const taskId = req.params.id;

    // find task that belongs to logged-in user
    const task = await Task.findOne({
      _id: taskId,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found or unauthorized",
      });
    }

    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.status = status ?? task.status;

    await task.save();

    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get tasks
const getTasks = async (req, res) => {
  try {
    const userId = req.user._id;

    const tasks = await Task.find({ user: userId }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// delete task
const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const userId = req.user._id;

    // delete only if task belongs to logged-in user
    const task = await Task.findOneAndDelete({
      _id: taskId,
      user: userId,
    });

    if (!task) {
      return res.status(400).json({
        success: false,
        message: "Task not found or unauthorized",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {}
};

export { createTask, updateTask, getTasks, deleteTask };
