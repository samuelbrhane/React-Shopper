import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import shop from "../../assets/shopping.jpg";
import { FcGoogle } from "react-icons/fc";
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
import { Loader, Navbar, Title } from "../../components";
import { useDispatch } from "react-redux";
import { ACTIVE_USER } from "../../redux/slice/authSlice";

const Auth = ({ register }) => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          dispatch(ACTIVE_USER({ email: userCredential.user.email }));
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
            dispatch(ACTIVE_USER({ email: userCredential.user.email }));
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

        dispatch(ACTIVE_USER({ email: result.user.email }));
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
      <section className="mt-[110px] flex flex-col mb-10 md:flex-row justify-center items-center gap-24">
        {isLoading && <Loader />}
        <div className="authLeft hidden md:inline">
          <img src={shop} alt="shopping" className="h-[500px]" />
        </div>
        <div className="authRight">
          <Title title={register ? "Register" : "Login"} />

          <form onSubmit={handleSubmit} className="mt-4 w-[300px]">
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

            <button
              type="submit"
              className={`${
                register ? "bg-[#616a0f]" : "bg-[#22ac13]"
              } text-white font-bold rounded w-full my-2 py-2`}
            >
              {register ? "Register" : "Login"}
            </button>

            {register || (
              <button
                type="button"
                className="bg-blue-600 w-full text-white py-2 rounded font-bold flex items-center justify-center gap-1"
                onClick={handleGoogleLogin}
              >
                <FcGoogle className="text-xl" /> Login With Google
              </button>
            )}

            {register || (
              <Link to="/reset" className="text-[#c334b7] text-sm">
                Forget Password?
              </Link>
            )}

            <div className="text-sm">
              {register ? (
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#22ac13]">
                    Login
                  </Link>
                </p>
              ) : (
                <p>
                  Don't have an account?{" "}
                  <Link to="/register" className="text-[#616a0f]">
                    Register
                  </Link>
                </p>
              )}
              {}
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Auth;
