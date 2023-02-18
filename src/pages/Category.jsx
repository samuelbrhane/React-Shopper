import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Navbar,
  Footer,
  Filters,
  CategoryProducts,
  Loader,
} from "../components";
import { db } from "../firebase/config";
import links from "../utils/links";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [currentCategory, setCurrentCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setCurrentCategory(links[id]);
    const fetchProducts = async () => {
      setLoading(true);
      const docsRef = collection(db, "products");
      const q = query(
        docsRef,
        orderBy("timestamp", "desc"),
        where("category", "array-contains", currentCategory)
      );
      const docSnap = await getDocs(q);
      let products = [];
      docSnap.forEach((doc) => {
        return products.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setProducts(products);
      setLoading(false);
    };
    fetchProducts();
  }, [currentCategory, id]);

  if (loading) return <Loader />;
  return (
    <div className="">
      <Navbar />
      <div className="mt-[60px] md:mt-[70px] pt-4 flex flex-col gap-5 md:flex-row px-4  bg-white">
        <Filters />
        <CategoryProducts products={products} title={currentCategory} />
      </div>
      <Footer />
    </div>
  );
};

export default Category;
