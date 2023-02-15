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
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-6 px-4">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Categories */}
      <Categories />

      {/* Featured Products */}
      <div className="mt-6 md:mt-8">
        <Title title="Featured Products" underline={true} />
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-6 px-4">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
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

      <Footer content={true} />
    </section>
  );
};

export default Home;
