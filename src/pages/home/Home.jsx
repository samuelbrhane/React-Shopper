import React from "react";
import {
  Navbar,
  Slider,
  ProductCard,
  Categories,
  Title,
  Footer,
} from "../../components";
import "./home.scss";
import discount from "../../assets/discountOffer.jpg";
import { data } from "../../data";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTwitter, FaTelegram, FaGoogle } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home">
      <div className="sliderContainer">
        <Navbar />
        <Slider />
      </div>
      <div className="homeContainer">
        <div className="discountContainer">
          <Title title="30% Discount Offer" />
          <img src={discount} alt="discount" />
        </div>
        <div className="trendingProducts">
          <Title title="Trending Products" />
          <div className="products">
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Categories />
        <div className="featuredProducts">
          <Title title="Featured Products" />
          <div className="products">
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="joinus">
          <p>stay in touch with us</p>
          <div>
            <input type="text" placeholder="Enter Your Email" />
            <button>join us</button>
          </div>
          <div className="icons">
            <BsFacebook />
            <BsInstagram />
            <FaGoogle />
            <FaTelegram />
            <FaTwitter />
          </div>
        </div>
        <Footer content={true} />
      </div>
    </section>
  );
};

export default Home;
