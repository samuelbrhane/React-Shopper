import React, { useEffect, useState } from "react";
import {
  Navbar,
  Slider,
  ProductCard,
  Categories,
  Title,
  Footer,
  Pagination,
} from "../components";
import discount from "../assets/discountOffer.jpg";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentTrendingPage, setCurrentTrendingPage] = useState(1);
  const [currentFeaturedPage, setCurrentFeaturedPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const indexLastTrendingPost = currentTrendingPage * postPerPage;
  const indexFirstTrendingPost = indexLastTrendingPost - postPerPage;

  const indexLastFeaturedPage = currentFeaturedPage * postPerPage;
  const indexFirstFeaturedPost = indexLastFeaturedPage - postPerPage;

  useEffect(() => {
    const fetchProducts = async () => {
      const docsRef = collection(db, "products");
      const q = query(docsRef, orderBy("timestamp", "desc"));
      const docSnap = await getDocs(q);
      let products = [];
      docSnap.forEach((doc) => {
        return products.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <section>
      {/* Navbar */}
      <Navbar />

      {/* Slider */}
      <Slider />

      {/* Discount */}
      <div className="w-full mt-6 md:mt-8 px-4 flex flex-col items-center h-[110vh]">
        <Title title="30% Discount Offer" underline={true} />
        <img src={discount} alt="discount" className="mt-2 w-full h-[100vh]" />
      </div>

      {/* Trending Products */}
      <div className="mt-6 md:mt-8">
        <Title title="Trending Products" underline={true} />
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-4 md:gap-6 px-4">
          {products
            ?.slice(indexFirstTrendingPost, indexLastTrendingPost)
            .map((product) => {
              return (
                <ProductCard
                  key={product?.id}
                  data={product?.data}
                  id={product?.id}
                />
              );
            })}
        </div>
        <Pagination
          postPerPage={postPerPage}
          totalPost={products}
          setCurrentPage={setCurrentTrendingPage}
          currentPage={currentTrendingPage}
        />
      </div>

      {/* Categories */}
      <Categories />

      {/* Featured products */}
      <div className="mt-6 md:mt-8 mb-4">
        <Title title="Featured Products" underline={true} />
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-4 md:gap-6 px-4">
          {products
            ?.reverse()
            ?.slice(indexFirstFeaturedPost, indexLastFeaturedPage)
            .map((product) => {
              return (
                <ProductCard
                  key={product?.id}
                  data={product?.data}
                  id={product?.id}
                />
              );
            })}
        </div>
        <Pagination
          postPerPage={postPerPage}
          totalPost={products}
          setCurrentPage={setCurrentFeaturedPage}
          currentPage={currentFeaturedPage}
        />
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
