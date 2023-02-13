import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import shop from "../../assets/shopping.jpg";
import { AiOutlineGoogle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastOption } from "../../utils/toastOptions";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { Loader, Navbar } from "../../components";

const Auth = ({ register }) => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword } = inputData;
    if (register) {
      if (password !== confirmPassword) {
        toast.error(
          "Password should match with confirm password!",
          toastOption
        );
        return false;
      }
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = inputData;
    if (!register) {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          toast.success("User Login Successfully!", toastOption);
          setIsLoading(false);
          navigate("/");
        })
        .catch((error) => {
          let errorMessage = error.message
            .replace("Firebase: Error (auth/", "")
            .replace(")", "");
          toast.error(errorMessage, toastOption);
          setIsLoading(false);
        });
    } else {
      const validation = handleValidation();
      if (validation) {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            toast.success("User Register Successfully!", toastOption);
            setIsLoading(false);
            navigate("/login");
          })
          .catch((error) => {
            let errorMessage = error.message
              .replace("Firebase: Error (auth/", "")
              .replace(")", "");
            toast.error(errorMessage, toastOption);
            setIsLoading(false);
          });
      }
    }
  };

  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        toast.success("User Login Successfully!", toastOption);
        navigate("/");
      })
      .catch((error) => {
        let errorMessage = error.message
          .replace("Firebase: Error (auth", "")
          .replace(")", "");
        toast.error(errorMessage, toastOption);
      });
  };

  return (
    <>
      <Navbar />
      <section className="mt-[120px] flex flex-col-reverse items-center justify-end gap-4 md:gap-0 lg:mt-[100px] lg:justify-center lg:items-center lg:gap-10">
        {isLoading && <Loader />}
        <div className="hidden md:authLeft">
          <img src={shop} alt="" className="h-[500px]" />
        </div>
        <div className="authRight">
          <h1> {register ? "Register" : "Login"}</h1>
          <form onSubmit={handleSubmit}>
            <div className="authInputs">
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                value={inputData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                value={inputData.password}
                onChange={handleChange}
              />
              {register && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  required
                  value={inputData.confirmPassword}
                  onChange={handleChange}
                />
              )}
            </div>
            <div>
              <button type="submit" className="bg-[#c334b7]">
                {register ? "Register" : "Login"}
              </button>
            </div>
            {register || (
              <div>
                <button
                  type="button"
                  className="bg-[#a38b23] flex items-center justify-center gap-1"
                  onClick={handleGoogleLogin}
                >
                  <AiOutlineGoogle className="text-xl" /> Login With Google
                </button>
              </div>
            )}

            {register || (
              <Link to="/reset" className="">
                Forget Password?
              </Link>
            )}

            <Link
              className="mt-1 text-green-400 text-lg"
              to={`${register ? "/login" : "/register"}`}
            >
              <p>
                {register
                  ? "Already have an account? Login "
                  : "Don't have an account? Register"}
              </p>
            </Link>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Auth;
