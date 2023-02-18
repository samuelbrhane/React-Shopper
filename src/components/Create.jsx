import React from "react";

const Create = ({
  handleChange,
  handleSubmit,
  handleCheck,
  inputData,
  categories,
  checkedState,
  imageChange,
}) => {
  return (
    <form onSubmit={handleSubmit} className="mt-4 w-[300px]">
      <div className="authInputs !gap-2">
        <input
          type="text"
          placeholder="Vendor"
          name="vendor"
          required
          value={inputData.vendor}
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Old Price"
          name="oldPrice"
          required
          value={inputData.oldPrice}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Current Price"
          name="currentPrice"
          required
          value={inputData.currentPrice}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Type"
          name="type"
          required
          value={inputData.type}
          onChange={handleChange}
        />
        <input type="file" required multiple={true} onChange={imageChange} />
        <textarea
          value={inputData.description}
          onChange={handleChange}
          name="description"
          placeholder="Description"
          className="outline-none rounded border-2 border-[#a3c34a] py-2 px-4"
        ></textarea>
        <p className="font-bold">Select Categories</p>
        <div className="grid grid-cols-2 gap-1">
          {categories.map((category, index) => {
            return (
              <div key={index}>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      name={category}
                      value={category}
                      checked={checkedState[index]}
                      onChange={() => handleCheck(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>
                      {category}
                    </label>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="submit"
        className={`bg-blue-400 text-white font-bold rounded w-full my-2 py-2`}
      >
        Create
      </button>
    </form>
  );
};

export default Create;
