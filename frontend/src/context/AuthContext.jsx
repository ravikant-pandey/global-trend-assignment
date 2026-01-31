import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  // Fetch logged-in
  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`${backendURL}/api/users/current-user`, {
        withCredentials: true,
      });
      setUser(data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(`${backendURL}/api/tasks/get-tasks`, {
        withCredentials: true,
      });
      if (data.success) {
        // console.log(data.tasks);
        setTasks(data.tasks);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (user) {
      fetchUser();
      fetchTasks();
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        fetchUser,
        loading,
        backendURL,
        tasks,
        setTasks,
        fetchTasks,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
