import React from "react";
import { Navbar, Footer, Title } from "../../components";
import "./product.scss";
import { data } from "../../data";
import { BsArrowBarRight } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";

const Product = () => {
  return (
    <div className="product">
      <Navbar />
      <div className="productContainer">
        <div className="productDesc">
          <div className="left">
            <img src={`${data[5].image[0]}`} alt="product" />
            <img src={`${data[5].image[1]}`} alt="product" />
          </div>
          <div className="middle">
            <img src={`${data[5].image[0]}`} alt="product" />
          </div>
          <div className="right">
            <Title title="Suit" />
            <h2>
              Price: <span>$34</span> <BsArrowBarRight /> $23{" "}
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              dolores eaque eum reprehenderit incidunt excepturi explicabo
              voluptate a neque perferendis adipisci doloremque voluptas
              repellat non, beatae quisquam deleniti nobis placeat, nemo
              pariatur facere nihil consectetur in. Error id labore, corporis
              quos est necessitatibus debitis blanditiis rem non ratione placeat
              beatae neque ipsa incidunt officia adipisci voluptas, impedit
              minus odit repellendus pariatur nam ullam alias quas.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              ducimus libero maxime eaque, sit consequuntur cupiditate quis
              nostrum architecto ratione maiores magnam, qui consectetur a
              mollitia commodi repudiandae! Modi assumenda aperiam consequuntur
              qui optio, voluptate soluta ab! Ut vitae eligendi consectetur,
              unde rem tenetur, nostrum perspiciatis sunt dolor praesentium
              aperiam!
            </p>
            <div className="productAmount">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <button className="addCart">
              <FaShoppingCart /> Add to cart
            </button>
            <button className="likeProduct">
              <GiSelfLove /> Add to wishlist
            </button>
            <div className="description">
              <p>Vendor: Polo</p>
              <p>Product-Type: Suit</p>
              <p>Tags: Men's,Suit,New Arrival</p>
            </div>
            <div className="additional">
              <button>Additional Information</button>
              <button>FAQ</button>
            </div>
          </div>
        </div>
        <Footer content={true} />
      </div>
    </div>
  );
};

export default Product;
