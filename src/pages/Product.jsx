import React from "react";
import { Navbar, Footer, Title } from "../components";
import { data } from "../data";
import { BsArrowBarRight } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";

const Product = () => {
  return (
    <div className="product">
      <Navbar />
      <div className="mt-[80px]">
        <div className="flex px-4 gap-4 h-[84vh]">
          <div className="w-[15%]">
            <img
              src={`${data[5].image[0]}`}
              alt="product"
              className="w-full h-[200px] rounded"
            />
            <img
              src={`${data[5].image[1]}`}
              alt="product"
              className="w-full h-[200px] rounded"
            />
          </div>
          <div className="w-[35%]">
            <img
              src={`${data[5].image[0]}`}
              alt="product"
              className="w-full h-full rounded"
            />
          </div>
          <div className="w-[50%]">
            <Title title="Suit" />
            <h2 className="mb-2 flex items-center gap-1 text-[(6, 87, 26)]">
              Price: <span className="line-through">$34</span>{" "}
              <BsArrowBarRight /> $23{" "}
            </h2>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              dolores eaque eum reprehenderit incidunt excepturi explicabo
              voluptate a neque perferendis adipisci doloremque voluptas
              repellat non, beatae quisquam deleniti nobis placeat, nemo
              pariatur facere nihil consectetur in. Error id labore, corporis
              quos est necessitatibus debitis blanditiis rem non ratione placeat
              beatae neque ipsa incidunt officia adipisci voluptas, impedit
              minus odit repellendus pariatur nam ullam alias quas.
            </p>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              ducimus libero maxime eaque, sit consequuntur cupiditate quis
              nostrum architecto ratione maiores magnam, qui consectetur a
              mollitia commodi repudiandae! Modi assumenda aperiam consequuntur
              qui optio, voluptate soluta ab! Ut vitae eligendi consectetur,
              unde rem tenetur, nostrum perspiciatis sunt dolor praesentium
              aperiam!
            </p>
            <div className="flex items-center mt-2 gap-1">
              <button className="px-1 text-lg text-white rounded-sm bg-yellow-300">
                -
              </button>
              <p className="pt-1 text-lg">1</p>
              <button className="px-1 text-lg text-white rounded-sm bg-yellow-300">
                +
              </button>
            </div>
            <button className="mt-2 py-1 px-2 bg-blue-400 text-white rounded-sm flex items-center gap-2 uppercase text-lg">
              <FaShoppingCart /> Add to cart
            </button>
            <button className="mt-2 bg-transparent flex items-center gap-1 uppercase mf-1 text-blue-400">
              <GiSelfLove /> Add to wishlist
            </button>
            <div className="mt-4 text-lg">
              <p>Vendor: Polo</p>
              <p className="my-1">Product-Type: Suit</p>
              <p>Tags: Men's,Suit,New Arrival</p>
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
        <Footer content={true} />
      </div>
    </div>
  );
};

export default Product;
