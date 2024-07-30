import React from "react";
import "./Food.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Food = ({ foodItems }) => {
  return (
    <div className="fo4">
      {foodItems.map((item) => (
        <div className="fo">
          <div className="fo1">
            <img src={item.image} alt="" />
          </div>
          <div className="fo2">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <div className="fo3">
            <p>Learn More</p>
            <FaLongArrowAltRight />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Food;
