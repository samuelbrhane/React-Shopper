import { Title } from "../";
import "./categories.scss";
import { data } from "../../categoriesData";

const Categories = () => {
  return (
    <div className="categories">
      <Title title="Categories" />
      <div className="categoryProducts">
        {data.map((category) => {
          const { name, image, id } = category;
          return (
            <div className={`category c${id}`}>
              <img src={image} alt="" key={id} />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
