import React from "react";
import "./title.scss";

const Title = ({ title, underline }) => {
  return (
    <div className="title">
      <h1>
        {title} <div className="titleCover"></div>
      </h1>
      {underline && <div className="underline"></div>}
    </div>
  );
};

export default Title;
