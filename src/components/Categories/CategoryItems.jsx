import React from "react";

const CategoryItem = ({ image, name, amount }) => {
  return (
    <div className="category">
      <div className="category-name">
        <img src={image} alt="" />
        <p>{name}</p>
      </div>
      <p className="amount">{amount}</p>
    </div>
  );
};

export default CategoryItem;