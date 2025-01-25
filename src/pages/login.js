import React, { useState } from "react";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import apiInstance from "../config/api/axios";
import Swal from "sweetalert2";

const Login = () => {
  const [model, setModel] = useState({});
  const navigate = useNavigate();

  const handle = () => {
    console.log(model);
    apiInstance
      .post("auth/login", model)
      .then((res) => {
        console.log("Response Data:", res.data);
  
        // Check if token exists in response and store it
        if (res.data.isSuccefull && res.data.data.token) {
          localStorage.setItem("authToken", res.data.data.token);
          Swal.fire({
                title: "Good job!",
                text: "You are SuccessFully Loged In!",
                icon: "success",
                confirmButtonText: "OK", 
              });
          navigate("/"); // Navigate to home page
        } else {
          Swal.fire({
                title: "There is an Err!",
                text: "You not Loggin in With Token",
                icon: "error",
                confirmButtonText: "OK", 
              });
        }
      })
      .catch((err) => {
        console.error("Login Error:", err);
        Swal.fire({
          title: "There is an Err!",
          text: err.response?.data?.message,
          icon: "error",
          confirmButtonText: "OK", 
        })
      });
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
          Login to Your Account
        </h2>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setModel({ ...model, email: e.target.value })}
          className="rounded-md mb-3 shadow-sm focus:ring-2 focus:ring-blue-400"
          required
        />
        <Input.Password
          placeholder="Password"
          onChange={(e) => setModel({ ...model, password: e.target.value })}
          className="rounded-md mb-3 shadow-sm focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="primary"
          onClick={handle}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md"
        >
          Login
        </button>
        <div className="text-center mt-4">
          <div className="text-blue-600 hover:text-blue-800">
            Don't have an account?{" "}
            <Link className="hover:underline" to={"/signUp"}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
