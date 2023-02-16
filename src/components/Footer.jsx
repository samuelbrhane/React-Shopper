import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTwitter, FaTelegram, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ({ content }) => {
  return (
    <div className="z-30 mt-4">
      {content && (
        <>
          <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-4 md:px-8 lg:px-12">
            <div className="flex flex-col text-[12px] md:text-[14px]">
              <h3 className="mb-1 text-[16px] font-semibold">Categories</h3>
              <Link to={`/category/${1}`}>Special Sell</Link>
              <Link to={`/category/${2}`}>New Arrival</Link>
              <Link to={`/category/${3}`}>Women's</Link>
              <Link to={`/category/${4}`}>Men's</Link>
              <Link to={`/category/${5}`}>Kid's</Link>
              <Link to={`/category/${6}`}>Accessories</Link>
            </div>
            <div className="flex flex-col text-[12px] md:text-[14px]">
              <h3 className="mb-1 text-[16px] font-semibold">Links</h3>
              <p>FAQ</p>
              <p>Pages</p>
              <p>Stores</p>
              <p>Compare</p>
              <p>Cookies</p>
            </div>
            <div className="flex justify-center text-[12px] md:text-[14px]">
              <div>
                <h3 className="mb-1 text-[16px] font-semibold">About</h3>
                <p className="about">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus dolor ut magni? Voluptates, neque ipsam
                  voluptatibus autem in ullam odio at assumenda nisi tempore,
                </p>
              </div>
            </div>

            <div className="flex justify-center text-[12px] md:text-[14px]">
              <div>
                <h3 className="mb-1 text-[16px] font-semibold">Contact</h3>
                <p className="contact">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus quisquam labore vel consequatur itaque a numquam
                  perspiciatis consectetur, obcaecati quia nemo libero?
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4 my-4 px-4 md:px-8 lg:px-12">
            <BsFacebook />
            <BsInstagram />
            <FaGoogle />
            <FaTelegram />
            <FaTwitter />
          </div>
        </>
      )}

      <h4 className="bg-blue-500 py-3  text-center text-white ">
        &#169; Copyright 2022 Samuel Brhane
      </h4>
    </div>
  );
};

export default Footer;
