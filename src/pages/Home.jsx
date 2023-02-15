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
      <Navbar />
      <Slider />

      <div className="w-full mt-10 px-4 flex flex-col items-center ">
        <Title title="30% Discount Offer" underline={true} />
        <img src={discount} alt="discount" className="mt-2" />
      </div>

      {/* <div className="p-4">
          <Title
            title="Trending Products"
            className="flex items-center justify-center flex-col mb-2"
          />
          <div className="products">
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Categories />
        <div className="p-4">
          <Title title="Featured Products" />
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="flex item-center justify-between py-4 px-12 bg-black uppercase text-white">
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
        </div>
        <Footer content={true} /> */}
    </section>
  );
};

export default Home;
