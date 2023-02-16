import React, { useEffect, useState } from "react";
import { Create, Loader, Navbar, Title } from "../components";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
const categories = [
  "Home",
  "New Arrival",
  "Special Sell",
  "Women",
  "Men",
  "Children",
  "Accessories",
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inputData, setInputData] = useState({
    name: "",
    oldPrice: "",
    currentPrice: "",
    category: [""],
    type: "",
  });
  const [checkedState, setCheckedState] = useState(
    new Array(categories.length).fill(false)
  );

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {};

  const handleCheck = (position) => {
    setCheckedState(
      checkedState.map((item, index) => (index === position ? !item : item))
    );
  };

  useEffect(() => {
    const getAdmin = async () => {
      getDoc(doc(db, "admin", process.env.REACT_APP_ADMIN_ID)).then((res) => {
        const user = JSON.parse(localStorage.getItem("shoppersUser"));
        if (res.data().email !== user?.email) {
          navigate("/admin/login");
        } else {
          setUserLogin(res.data());
        }
      });
      setLoading(false);
    };
    getAdmin();
  }, [navigate]);

  if (loading || !userLogin) return <Loader />;

  return (
    <div>
      <Navbar />
      <div className="mt-[90px] flex flex-col md:flex-row px-4 justify-between md:gap-12">
        <div>
          <Title title="Create a product" underline={true} />
          <Create
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleCheck={handleCheck}
            setImageFile={setImageFile}
            inputData={inputData}
            checkedState={checkedState}
            categories={categories}
          />
        </div>
        <div>
          <Title title="Products" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
