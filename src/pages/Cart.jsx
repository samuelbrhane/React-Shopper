import React from "react";
import { Navbar, Title, Footer } from "../components";
import { data } from "../data";
import { BsArrowLeft } from "react-icons/bs";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[80px] flex min-h-[85vh] gap-4 px-4">
        <div className="w-[70%] px-4">
          <div className="flex items-end justify-between border-4 border-red-300">
            <Title title="Your Cart" />
            <h2 className="pr-10">3 Items</h2>
          </div>
          <div className="">
            <div className="grid text-lg text-gray-400 grid-cols-4 uppercase text-center">
              <p className="text-start">Product Details</p>
              <p>Quantity</p>
              <p>Price</p>
              <p>Total</p>
            </div>
            <div className="mt-2">
              {data.slice(0, 4).map((item) => {
                return (
                  <div
                    className="mb-1 shadow grid grid-cols-4 text-center"
                    key={item.id}
                  >
                    <div className="text-start flex gap-2">
                      <img
                        src={`${item.image[0]}`}
                        alt="item"
                        className="w-[140px] h-[160px] rounded"
                      />
                      <div className="flex flex-col px-2 justify-between">
                        <h3> {item.name}</h3>
                        <button className="px-3 py-1 text-white rounded-sm bg-[rgb(212, 27, 197)]">
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-center mt-2">
                      <p className="px-2 text-lg bg-blue-300 border-x-[1px]">
                        +
                      </p>
                      <p>5</p>
                      <p className="px-2 text-lg bg-blue-300 border-x-[1px]">
                        -
                      </p>
                    </div>
                    <p className="pt-2 text-xl">${item.newPrice}</p>
                    <p className="pt-2 text-xl">$100</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-6">
            <button className=" px-4 py-2 shadow-md text-lg flex items-center gap-2 rounded-md">
              <BsArrowLeft /> Continue Shopping
            </button>
          </div>
        </div>
        <div className="w-[30%] h-[85vh] bg-[rgba(221, 241, 211, 0.5)] px-8">
          <Title title="Order History" />

          <div className="flex items-center justify-between py-8 border-[1px]">
            <h2>Items 3</h2>
            <h3>$435.6</h3>
          </div>
          <div className="">
            <h3>Shipping</h3>
            <p className="my-2 bg-black text-white py-2 px-4 rounded-sm">
              Standard Delivery - $5.00
            </p>
          </div>
          <div className="py-8">
            <h3>Promo Code</h3>
            <input
              type="text"
              placeholder="Enter Your Code"
              className="my-2 px-4 py-2 outline-none shadow-md"
            />
            <button className="py-2 px-4 block my-2 bg-[#c2ad34]">APPLY</button>
          </div>
          <div className="flex items-center justify-between my-8 border-b-2 pb-2">
            <h3>Total Cost</h3>
            <p>$464.54</p>
          </div>
          <button className="w-full py-2 text-lg text-white rounded bg-[#2551f0]">
            Checkout
          </button>
        </div>
      </div>
      <Footer content={true} />
    </>
  );
};

export default Cart;
