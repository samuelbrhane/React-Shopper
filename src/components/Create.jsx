import React from "react";

const Create = ({
  handleChange,
  handleSubmit,
  handleCheck,
  setImageFile,
  inputData,
  categories,
  checkedState,
}) => {
  return (
    <form onSubmit={handleSubmit} className="mt-4 w-[300px]">
      <div className="authInputs">
        <input
          type="text"
          placeholder="Name"
          name="name"
          required
          value={inputData.name}
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
        <input
          type="file"
          required
          multiple={true}
          onChange={(e) => setImageFile(e.target.files)}
        />
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
