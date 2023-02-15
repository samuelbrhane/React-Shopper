import { Title } from ".";
import { data } from "../categoriesData";

const Categories = () => {
  return (
    <div className="mb-8 px-4">
      <Title title="Categories" />
      <div className="mt-2 grid grid-cols-4 gap-4">
        {data.map((category) => {
          const { name, image, id } = category;
          return (
            <div className={`relative c${id}`} key={id}>
              <img
                src={image}
                alt=""
                key={id}
                className="w-full h-[320px] rounded"
              />
              <p className="absolute top-4 left-4 bg-green-400 py-2 px-4 text-xl rounded text-white hover:bg-purple-600">
                {name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
