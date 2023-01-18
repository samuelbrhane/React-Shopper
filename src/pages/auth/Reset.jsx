import React, { useState } from "react";
import styled from "styled-components";
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
    console.log(email);
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
      <ResetContainer>
        {isLoading && Loader}
        <div className="authLeft">
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
              className="submitBtn"
              onClick={handleResetPassword}
            >
              Reset
            </button>
          </form>
          <div className="backLink">
            <Link to="/login">-- Login</Link>
            <Link to="/register">Register --</Link>
          </div>
        </div>
        <div className="authRight">
          <img src={forget} alt="forget" />
        </div>
      </ResetContainer>
      <ToastContainer />
    </>
  );
};

const ResetContainer = styled.section`
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  .authRight {
    animation: slide-left 0.8s ease;
    img {
      width: 400px;
    }
  }
  .authLeft {
    animation: slide-right 0.8s ease;
    box-shadow: 1px 1px 2px;
    padding: 1rem 2rem;
    text-align: center;
    input {
      outline: none;
      border-radius: 5px;
      margin-bottom: 0.4rem;
      border: 2px solid #a3c34a;
      padding: 0.5rem 1.1rem;
      font-size: 1rem;
    }
    h1 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 0.5rem;
      color: #109965;
    }
    .submitBtn {
      background-color: #c334b7;
      display: block;
      width: 100%;
      padding: 0.4rem;
      color: #fff;
      font-size: 1rem;
    }
    .backLink {
      padding: 0 0.1rem;
      margin-top: 0.4rem;
      color: #000;
      display: flex;
      justify-content: space-between;
    }
  }
  @keyframes slide-left {
    0% {
      transform: translateX(6rem);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slide-right {
    0% {
      transform: translateX(-6rem);
    }
    100% {
      transform: translateX(0);
    }
  }
  @media (max-width: 800px) {
    gap: 0;
  }
  @media (max-width: 600px) {
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    .authRight {
      img {
        width: 300px;
      }
    }
  }
`;

export default Reset;
