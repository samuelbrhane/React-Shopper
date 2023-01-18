import { useNavigate, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./navbar.scss";
import { toastOption } from "../../utils/toastOptions";
import { useDispatch } from "react-redux";
import { USER_LOGOUT } from "../../redux/slice/authSlice";
import { useSelector } from "react-redux";
import { selectIsLoggedin, selectUserEmail } from "../../redux/slice/authSlice";
import CartContent from "./CartContent";

const RightBtns = () => {
  const userLogin = useSelector(selectIsLoggedin);
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logout Successfully!", toastOption);
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message, toastOption);
      });
    dispatch(USER_LOGOUT());
  };

  return (
    <>
      {userLogin ? (
        <div className="navRightBtns">
          <p className="useremail">{userEmail}</p>
          <CartContent />
          <button className="logoutBtn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="navRightBtns">
          <CartContent />
          <button className="login">
            <Link className="loginLink" to="/login">
              Login
            </Link>
          </button>
          <button className="registerBtn">
            <Link className="registerLink" to="/register">
              Register
            </Link>
          </button>
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default RightBtns;
