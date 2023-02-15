import React, { useState } from "react";
import { Link } from "react-router-dom";
import forget from "../../assets/forget.jpg";
import "react-toastify/dist/ReactToastify.css";
import { toastOption } from "../../utils/toastOptions";
import { auth } from "../../firebase/config";
import { toast, ToastContainer } from "react-toastify";
import { Loader, Navbar, Title } from "../../components";
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
      <Navbar />
      <div className="flex justify-center md:gap-24 mt-[120px] md:items-center">
        {isLoading && Loader}
        <div className="authLeft">
          <Title title="Reset Password" underline={true} />
          <form className="mt-2 w-[300px]">
            <div className="authInputs">
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-[#c334b7] w-full py-2 rounded mt-2 font-bold text-white"
              onClick={handleResetPassword}
            >
              Reset
            </button>
          </form>
          <div className="flex px-2 justify-between mt-1">
            <Link to="/login" className="text-[#22ac13]">
              -- Login
            </Link>
            <Link to="/register" className="text-[#616a0f]">
              Register --
            </Link>
          </div>
        </div>
        <div className="authRight hidden md:inline">
          <img src={forget} alt="forget" className="h-[500px]" />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Reset;
