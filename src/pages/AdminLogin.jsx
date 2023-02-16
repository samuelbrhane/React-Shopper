import React, { useState } from "react";
import { Navbar, Title } from "../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastOption } from "../utils/toastOptions";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    toast.error("Something Went Wrong.", toastOption);
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="mt-[100px] flex flex-col items-center">
          <Title title="Admin Login" underline={true} />
          <form onSubmit={handleSubmit} className="mt-4 w-[300px]">
            <div className="authInputs">
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                value={inputData.email}
                onChange={(e) =>
                  setInputData({ ...inputData, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                value={inputData.password}
                onChange={(e) =>
                  setInputData({ ...inputData, password: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className={` bg-blue-400 text-white font-bold rounded w-full my-2 py-2`}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AdminLogin;
