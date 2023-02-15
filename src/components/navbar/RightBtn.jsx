import { useNavigate, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        <div className="mt-6 flex flex-col items-center gap-6 md:flex-row md:gap-1">
          <p className="useremail">{userEmail}</p>
          <CartContent />
          <button
            className="mt-2 py-2 px-4 text-white rounded text-lg bg-[#6e4b08]"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center gap-6 md:flex-row md:gap-1">
          <CartContent />
          <button className="mt-2 py-2 px-4 text-white rounded text-lg bg-[#3cec4e]">
            <Link className="text-white" to="/login">
              Login
            </Link>
          </button>
          <button className="mt-2 py-2 px-4 text-white rounded text-lg bg-[#6e4b08]">
            <Link className="text-white" to="/register">
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
