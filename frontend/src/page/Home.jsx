import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Home() {
  const { user, tasks } = useAuth();

  return (
    <div>
      <Navbar />

      <div className="min-h-screen p-6">
        {user ? (
          tasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
              <p className="text-gray-500 text-lg font-medium">No tasks yet</p>
              <Link
                to="/add-task"
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Add Task
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tasks.map((task) => (
                <TaskCard key={task._id} task={task} />
              ))}
            </div>
          )
        ) : (
          <div className="flex items-center justify-center h-[70vh]">
            <h1 className="text-xl font-semibold text-gray-600">
              Please login to view your tasks
            </h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
