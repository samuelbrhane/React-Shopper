import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Navbar } from "../components";

const Success = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center px-4 md:px-10 lg:px-16 mt-[80px]">
        <div className="shadow bg-white p-2">
          <div className="flex items-center gap-1">
            <BsCheckCircleFill className="text-green-500" />{" "}
            <h1 className="font-bold text-lg">
              Thank you, your order has been confirmed.
            </h1>
          </div>
          <p className="font-light mt-2 text-sm ">
            Thank you for shopping with us. We will and a confirmation once your
            item has shipped, if your would like to check the status of your
            order, please press the link below.
          </p>
          <div className="w-full  px-4 mt-4 mb-3">
            <Link to="/orders">
              <button className="bg-yellow-400 hover:bg-yellow-500 w-full py-1">
                Go To My Orders
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
