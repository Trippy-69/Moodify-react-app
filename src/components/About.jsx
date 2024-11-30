import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the login logic
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-white bg-opacity-20 backdrop-blur-md">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold">Welcome Back to Sparkit!</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-lg font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-yellow-500 text-gray-800 font-bold rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <div className="text-center mt-4">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="#signup" className="text-yellow-500 font-semibold">
              Signup Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
