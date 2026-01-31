import { useState } from "react";
import { Pencil, Trash2, X } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const TaskCard = ({ task }) => {
  const { fetchTasks, backendURL } = useAuth();
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  // UPDATE TASK
  const handleUpdate = async () => {
    try {
      const { data } = await axios.put(
        `${backendURL}/api/tasks/update-task/${task._id}`,
        { title, description, status },
        { withCredentials: true },
      );

      if (data.success) {
        toast.success(data.message);
        fetchTasks();
        setIsEditOpen(false);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  // DELETE TASK
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `${backendURL}/api/tasks/delete-task/${task._id}`,
        { withCredentials: true },
      );
      if (data.success) {
        toast.success(data.message);
        fetchTasks();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      {/* Card */}
      <div className="bg-white p-4 rounded-lg shadow border flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg">{task.title}</h3>
          <p className="text-gray-600 text-sm mt-1">{task.description}</p>

          <span
            className={`inline-block mt-3 px-3 py-1 text-xs rounded-full ${
              task.status === "completed"
                ? "bg-green-100 text-green-600"
                : "bg-blue-100 text-blue-600"
            }`}
          >
            {task.status}
          </span>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setIsEditOpen(true)}
            className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 rounded-full px-4 py-1.5 text-sm"
          >
            <Pencil size={16} /> Edit
          </button>

          <button
            onClick={handleDelete}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white rounded-full px-4 py-1.5 text-sm"
          >
            <Trash2 size={16} /> Delete
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-sm rounded-lg p-5 relative">
            <button
              onClick={() => setIsEditOpen(false)}
              className="absolute top-3 right-3"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-semibold mb-4">Edit Task</h2>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mb-3"
            />

            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mb-3"
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mb-4"
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsEditOpen(false)}
                className="px-4 py-2 border rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskCard;
