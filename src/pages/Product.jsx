import React from "react";
import { Navbar, Footer, Title } from "../components";
import { data } from "../data";
import { BsArrowBarRight } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const Product = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[80px] md:mt-[90px] flex flex-col lg:flex-row px-4 lg:gap-4 mb-6">
        <div className="flex mb-4 gap-4 lg:w-[55%] lg:h-[calc(85vh)]">
          <div className="w-[40%] grid grid-rows-2 gap-4">
            <img
              src={`${data[5].image[0]}`}
              alt="product"
              className="w-full rounded h-full"
            />

            <img
              src={`${data[5].image[1]}`}
              alt="product"
              className="w-full rounded h-full"
            />
          </div>

          <div className="w-[60%]">
            <img
              src={`${data[5].image[0]}`}
              alt="product"
              className="w-full h-full rounded"
            />
          </div>
        </div>
        <div className="lg:w-[45%]">
          <Title title="Suit" />
          <h2 className="mb-2 flex items-center gap-1 text-[(6, 87, 26)]">
            Price: <span className="line-through">$34</span> <BsArrowBarRight />{" "}
            $23
          </h2>
          <p className="mb-2 text-[13px] md:text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            dolores eaque eum reprehenderit incidunt excepturi explicabo
            voluptate a neque perferendis adipisci doloremque voluptas repellat
            non, beatae quisquam deleniti nobis placeat, nemo pariatur facere
            nihil consectetur in.
          </p>
          <p className="mb-2 text-[13px] md:text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            ducimus libero maxime eaque, sit consequuntur cupiditate quis
            nostrum architecto ratione maiores magnam, qui consectetur a
            mollitia commodi repudiandae! Modi assumenda aperiam consequuntur
            qui optio, voluptate soluta ab.
          </p>
          <div className="flex items-center mt-2 gap-1">
            <button className="px-1 text-blue-500 text-xl rounded-sm">-</button>
            <p className="pt-1 text-lg">1</p>
            <button className="px-1 text-blue-500 text-xl rounded-sm">+</button>
          </div>
          <button className="mt-2 py-1 px-2 bg-blue-400 text-white font-bold rounded flex items-center gap-2 text-lg">
            <FaShoppingCart /> Add to Cart
          </button>

          <div className="mt-4 text-lg">
            <p>
              Vendor: <span className="font-light">Polo</span>
            </p>
            <p className="my-1">
              Product-Type: <span className="font-light">Suit</span>
            </p>
            <p>
              Tags: <span className="font-light">Men's,Suit,New Arrival</span>
            </p>
          </div>
          <div className="mt-4 border-t-[3px] border-[#234354] pt-2">
            <button className="block mt-1 uppercase bg-transparent py-1 px-2 border-2">
              Additional Information
            </button>
            <button className="block mt-1 uppercase bg-transparent py-1 px-2 border-2">
              FAQ
            </button>
          </div>
        </div>
      </div>

      {/* Join Us */}
      <div className="flex item-center justify-between md:px-8 lg:px-12 py-5 md:py-7 px-2 bg-black uppercase text-white gap-4">
        <p className="text-[11px] md:text-lg whitespace-nowrap flex items-center">
          stay in touch
        </p>
        <div className="flex items-center md:flex-grow md:ml-12 md:justify-end">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="outline-none border-none py-1 px-2 md:w-[60%]"
          />
          <button className="text-[10px] h-full md:text-lg whitespace-nowrap bg-gray-500 px-4 uppercase">
            join us
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer content={true} />
    </div>
  );
};

export default Product;
