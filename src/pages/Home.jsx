import React from "react";
import {
  Navbar,
  Slider,
  ProductCard,
  Categories,
  Title,
  Footer,
} from "../components";
import discount from "../assets/discountOffer.jpg";
import { data } from "../data";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTwitter, FaTelegram, FaGoogle } from "react-icons/fa";

const Home = () => {
  return (
    <section>
      {/* Navbar */}
      <Navbar />

      {/* Slider */}
      <Slider />

      {/* Discount */}
      <div className="w-full mt-6 md:mt-8 px-4 flex flex-col items-center ">
        <Title title="30% Discount Offer" underline={true} />
        <img src={discount} alt="discount" className="mt-2" />
      </div>

      {/* Trending Products */}
      <div className="mt-6 md:mt-8">
        <Title title="Trending Products" underline={true} />
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-6">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Categories */}
      <Categories />

      {/* <div className="p-4">
        <Title title="Featured Products" />
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div> */}
      {/* <div className="flex item-center justify-between py-4 px-12 bg-black uppercase text-white">
        <p className="text-lg">stay in touch with us</p>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="h-[30px] outline-none w-[280px] border-none"
          />
          <button className="h-[30px] px-4 uppercase">join us</button>
        </div>
        <div className="flex items-center gap-4">
          <BsFacebook />
          <BsInstagram />
          <FaGoogle />
          <FaTelegram />
          <FaTwitter />
        </div>
      </div> */}
      {/* <Footer content={true} /> */}
    </section>
  );
};

export default Home;
