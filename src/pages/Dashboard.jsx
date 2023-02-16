import React, { useState } from "react";
import { Create, Navbar, Title } from "../components";
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
  const [imageFile, setImageFile] = useState(null);
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
