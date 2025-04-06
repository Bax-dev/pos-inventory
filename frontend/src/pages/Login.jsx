import React from "react";
import { useLogin } from "../hooks/useLogin";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleLogin, formData, setFormData, errorMessage } = useLogin();

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen p-4">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl">
        {/* Left Section (Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Login to Account
          </h2>

          <form onSubmit={handleLogin}>
            {/* Username Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <div className="flex items-center border rounded-md p-2">
                <input
                  type="text"
                  className="w-full outline-none"
                  placeholder="Your Username"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  autoComplete="username"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Password
              </label>
              <div className="flex items-center border rounded-md p-2">
                <input
                  type="password"
                  className="w-full outline-none"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  autoComplete="new-password"
                />
              </div>
            </div>

            {errorMessage && (
              <p className="text-red-500 text-center mb-3">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-gray-900 text-white p-2 rounded-md hover:bg-gray-800"
            >
              Login
            </button>

            <p className="text-center text-gray-600 mt-3">
              Don't have an account? Sign Up{" "}
              <a href="/register" className="text-gray-900 font-semibold">
                Login
              </a>
            </p>
          </form>
        </div>

        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center text-white p-8 rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
          style={{ background: "linear-gradient(to right, #1e293b, #374151)" }}
        >
          <h2 className="text-2xl font-bold">How it works?</h2>
          <p className="text-center text-gray-300 mt-3">
            Login to comtinue managing your store efficiently.
          </p>
          <button className="mt-5 p-3 bg-white text-gray-900 rounded-full flex items-center shadow-md">
            <i className="bi bi-play-fill text-xl"></i>
          </button>
        </div>
      </div>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;
