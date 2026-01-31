import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, setUser, backendURL } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const firstLetter = user?.fullName?.charAt(0).toUpperCase();

  const handleLogout = async () => {
    try {
      const { data } = await axios.post(
        `${backendURL}/api/users/logout`,
        {},
        { withCredentials: true },
      );
      if (data.success) {
        setUser(null);
        localStorage.removeItem("isLoggedIn");
        setOpen(false);
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center relative">
      <Link to="/" className="text-lg font-semibold">
        <span className="text-gray-300">GLOBAL</span>{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          TREND
        </span>
      </Link>

      <div className="hidden md:flex gap-6 items-center">
        <Link to="/">Tasks</Link>
        <Link to="/add-task">Add Task</Link>

        {user ? (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-semibold"
            >
              {firstLetter}
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-md shadow">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="border border-gray-400 px-4 py-1.5 rounded-md"
          >
            Login
          </Link>
        )}
      </div>

      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-2xl">
          ☰
        </button>
      </div>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 py-4 md:hidden">
          <Link to="/" onClick={() => setOpen(false)}>
            Tasks
          </Link>
          <Link to="/add-task" onClick={() => setOpen(false)}>
            Add Task
          </Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-6 py-2 rounded-md"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
