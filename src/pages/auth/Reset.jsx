import React, { useState } from "react";
import { Link } from "react-router-dom";
import forget from "../../assets/forget.jpg";
import "react-toastify/dist/ReactToastify.css";
import { toastOption } from "../../utils/toastOptions";
import { auth } from "../../firebase/config";
import { toast, ToastContainer } from "react-toastify";
import { Loader } from "../../components";
import { sendPasswordResetEmail } from "firebase/auth";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // reset password email
  const handleResetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check your email for reset password link!", toastOption);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(error.message, toastOption);
        setIsLoading(false);
      });
  };
  return (
    <>
      <div>
        {isLoading && Loader}
        <div className="hidden md:authLeft">
          <h1> Reset Password</h1>
          <form>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#c334b7]"
              onClick={handleResetPassword}
            >
              Reset
            </button>
          </form>
          <div>
            <Link to="/login">-- Login</Link>
            <Link to="/register">Register --</Link>
          </div>
        </div>
        <div>
          <img src={forget} alt="forget" />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Reset;
