import React from "react";
import "./Categories.css";
import Home from "../../../public/Categories_icons/Home.svg";
import Sort_icon from "../../../public/Categories_icons/sort_icon.svg";
import Drinks from "../../../public/Categories_icons/drinks.svg";
import Investment from "../../../public/Categories_icons/investment.svg";
import Transportation from "../../../public/Categories_icons/transportation.svg";
import Rent from "../../../public/Categories_icons/rent.svg";
import Utilities from "../../../public/Categories_icons/utilities.svg";
import Emergency from "../../../public/Categories_icons/emergency.svg";
import Loans from "../../../public/Categories_icons/loans.svg";
import Vacations from "../../../public/Categories_icons/vacations.svg";


const Categories = () => {
  const category_item = [
    { image: Home, name: "Home Necessity", amount: "$150.00" },
    { image: Drinks, name: "Food and Drink", amount: "$80.00" },
    { image: Investment, name: "Investments", amount: "$72.00" },
    { image: Transportation, name: "Transportation", amount: "$30.00" },
    { image: Rent, name: "Rent", amount: "$30.00" },
    { image: Utilities, name: "Utilities", amount: "$30.00" },
    { image: Emergency, name: "Emergency", amount: "$30.00" },
    { image: Loans, name: "Loans", amount: "$30.00" },
    { image: Vacations, name: "Vacations", amount: "$30.00" },
  ];
  return (
    <div className="categories">
      <div className="categories-heading">
        <p>Categories</p>
        <img src={Sort_icon} alt="" />
      </div>
      <div className="category-body">
        {category_item.map((category, index) => {
          return (
            <div className="category">
              <div className="category-name">
                <img src={category.image} alt="" />
                <p>{category.name}</p>
              </div>
              <p className="amount">{category.amount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
