import React, { useState } from "react";
import { Navbar, Title } from "../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastOption } from "../utils/toastOptions";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useDispatch } from "react-redux";
import { ACTIVE_USER } from "../redux/slice/authSlice";

const AdminLogin = () => {
  const [inputData, setInputData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    const { email, password } = inputData;
    e.preventDefault();
    const adminInfo = await getDoc(
      doc(db, "admin", process.env.REACT_APP_ADMIN_ID)
    );
    if (
      email === adminInfo?.data().email &&
      password === adminInfo?.data().password
    ) {
      dispatch(ACTIVE_USER({ email: adminInfo?.data().email }));
      navigate("/dashboard");
    } else {
      toast.error("Wrong Credentials.", toastOption);
    }
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
