// Category.js
import React from "react";
import "./Categories.css";
import Sort_icon from "../../../public/Categories_icons/sort_icon.svg";
import CategoryItem from "./CategoryItems";

const Category = ({ categoryItems }) => {
  return (
    <div className="categories">
      <div className="heading">
        <p>Categories</p>
        <img src={Sort_icon} alt="" />
      </div>
      <div className="category-body">
        {categoryItems.map((category, index) => (
          <CategoryItem
            key={index}
            image={category.image}
            name={category.name}
            amount={category.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
