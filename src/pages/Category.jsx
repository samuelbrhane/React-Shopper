import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar, Footer, CategoryProducts, Loader } from "../components";
import { db } from "../firebase/config";
import links from "../utils/links";
import { useDispatch } from "react-redux";
const products = [
  "Sweater",
  "Shirt",
  "Jeans",
  "Cap",
  "Suit",
  "Flip",
  "Shorts",
  "Belt",
  "Socks",
  "Tie",
];

const Category = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [categoryTitle, setCategoryTitle] = useState(links[id]);
  const [rangeValue, setRangeValue] = useState(250);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [allCategoryProducts, setAllCategoryProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCategoryTitle(links[id]);
    const fetchProducts = async () => {
      setLoading(true);
      const docsRef = collection(db, "products");
      const q = query(
        docsRef,
        orderBy("timestamp", "desc"),
        where("category", "array-contains", links[id])
      );
      const docSnap = await getDocs(q);
      let products = [];
      docSnap.forEach((doc) => {
        return products.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setCurrentCategory(products);
      setAllCategoryProducts(products);
      setLoading(false);
    };
    fetchProducts();
  }, [id, dispatch]);

  const handleChange = (e) => {
    setCurrentCategory(
      allCategoryProducts?.filter((item) => item.data.type === e.target.value)
    );
  };

  const handlePrice = (e) => {
    const priceId = e.target.id;
    if (priceId === "lowest") {
      setCurrentCategory(
        allCategoryProducts?.filter((item) => +item.data.currentPrice < 150)
      );
    } else {
      setCurrentCategory(
        allCategoryProducts?.filter((item) => +item.data.currentPrice > 150)
      );
    }
  };

  if (loading) return <Loader />;
  return (
    <div className="">
      <Navbar />
      <div className="mt-[60px] md:mt-[70px] pt-4 flex flex-col gap-5 md:flex-row px-4  bg-white">
        <div className="md:fixed md:bottom-[55px]  md:top-[80px] flex  flex-col gap-2  bg-white z-50 px-4 md:w-[300px]">
          <div>
            <h2 className="mb-1 font-bold text-lg md:text-xl">
              Category Products
            </h2>
            {products.map((product, index) => (
              <div className="px-3 mb-1" key={index}>
                <input
                  type="radio"
                  name="product"
                  id={product}
                  className="mr-2"
                  value={product}
                  onChange={handleChange}
                />
                <label className="text-[17px]" htmlFor={product}>
                  {product}
                </label>
              </div>
            ))}
          </div>
          <div className="">
            <h2 className="mb-1 font-bold text-lg md:text-xl">Sort By</h2>
            <div className="pl-2">
              <div>
                <input
                  className="mr-2"
                  type="radio"
                  id="lowest"
                  name="price"
                  onChange={handlePrice}
                />
                <label className="text-[17px]" htmlFor="lowest">
                  Lowest Price
                </label>
              </div>
              <div>
                <input
                  className="mr-2"
                  type="radio"
                  id="highest"
                  name="price"
                  onChange={handlePrice}
                />
                <label className="text-[17px]" htmlFor="highest">
                  Highest Price
                </label>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold mb-1">Filter By Price</h2>
            <div className="range">
              <span>0</span>{" "}
              <input
                type="range"
                min="0"
                max="500"
                step="50"
                value={rangeValue}
                onChange={(e) => {
                  setRangeValue(e.target.value);
                  setCurrentCategory(
                    allCategoryProducts.filter(
                      (item) => +item.data.currentPrice < rangeValue
                    )
                  );
                }}
              />
              <span>300</span>
            </div>
            <button
              className="p-2 mt-4 w-full text-lg bg-red-500 rounded font-bold text-white bg-[rgb(247, 70, 194)]"
              onClick={() => setCurrentCategory(allCategoryProducts)}
            >
              Clear Filter
            </button>
          </div>
        </div>
        <CategoryProducts products={currentCategory} title={categoryTitle} />
      </div>
      <Footer />
    </div>
  );
};

export default Category;
