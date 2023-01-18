import React from "react";
import { Navbar, Title, Footer } from "../../components";
import "./cart.scss";
import { data } from "../../data";
import { BsArrowLeft } from "react-icons/bs";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="cartContainer">
        <div className="left">
          <div className="top">
            <Title title="Your Cart" />
            <h2>3 Items</h2>
          </div>
          <div className="middle">
            <div className="desc">
              <p className="first">Product Details</p>
              <p>Quantity</p>
              <p>Price</p>
              <p>Total</p>
            </div>
            <div className="productDetail">
              {data.slice(0, 4).map((item) => {
                return (
                  <div className="singleItem" key={item.id}>
                    <div className="item">
                      <img src={`${item.image[0]}`} alt="item" />
                      <div className="itemDesc">
                        <h3> {item.name}</h3>
                        <button>Remove</button>
                      </div>
                    </div>
                    <div className="quantity">
                      <p className="control">+</p>
                      <p>5</p>
                      <p className="control">-</p>
                    </div>
                    <p className="price">${item.newPrice}</p>
                    <p className="total">$100</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bottom">
            <button>
              {" "}
              <BsArrowLeft /> Continue Shopping
            </button>
          </div>
        </div>
        <div className="right">
          <Title title="Order History" />

          <div className="items">
            <h2>Items 3</h2>
            <h3>$435.6</h3>
          </div>
          <div className="shipping">
            <h3>Shipping</h3>
            <p>Standard Delivery - $5.00</p>
          </div>
          <div className="promo">
            <h3>Promo Code</h3>
            <input type="text" placeholder="Enter Your Code" />
            <button>APPLY</button>
          </div>
          <div className="total">
            <h3>Total Cost</h3>
            <p>$464.54</p>
          </div>
          <button className="checkout">Checkout</button>
        </div>
      </div>
      <Footer content={true} />
    </>
  );
};

export default Cart;
