import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

function Auth() {
  const [mode, setMode] = useState("login"); // login | signup
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { backendURL, fetchUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ((mode === "signup" && !fullName) || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      if (mode === "login") {
        const { data } = await axios.post(
          `${backendURL}/api/users/login`,
          { email, password },
          { withCredentials: true },
        );

        if (!data.success) return toast.error(data.message || "Login failed");

        toast.success(data.message);
        await fetchUser();
        navigate("/");
      } else {
        const { data } = await axios.post(`${backendURL}/api/users/register`, {
          fullName,
          email,
          password,
        });

        if (data.success) {
          toast.success(data.message);
          setMode("login");
          setFullName("");
          setEmail("");
          setPassword("");
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow w-full max-w-sm">
          <h2 className="text-xl font-semibold text-center mb-4">
            {mode === "login" ? "Login" : "Sign Up"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
            >
              {mode === "login" ? "Login" : "Create Account"}
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            {mode === "login" ? (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-blue-600"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-blue-600"
                >
                  Login
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;
