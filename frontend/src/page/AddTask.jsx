import { useState } from "react";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { backendURL, user, fetchTasks } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }
    if (!title || !description) {
      toast.error("Please fill all fields");
      return;
    }
    try {
      const { data } = await axios.post(
        `${backendURL}/api/tasks/create-task`,
        {
          title,
          description,
        },
        { withCredentials: true },
      );
      if (data.success) {
        fetchTasks();
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter task title"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter task description"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
}

export default AddTask;
