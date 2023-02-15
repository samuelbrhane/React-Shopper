import { Link } from "react-router-dom";
import { Title } from ".";
import { data } from "../categoriesData";

const Categories = () => {
  return (
    <div className="mt-6 md:mt-8 px-4">
      <Title title="Categories" underline={true} />
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((category) => {
          const { name, image, id } = category;
          return (
            <div className={`relative`} key={id}>
              <img
                src={image}
                alt="categoryImage"
                key={id}
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded"
              />
              <Link
                to={`/category/${id}`}
                className="absolute top-4 left-4 bg-green-400 py-2 px-4 text-xl rounded text-white hover:bg-purple-600"
              >
                {name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
