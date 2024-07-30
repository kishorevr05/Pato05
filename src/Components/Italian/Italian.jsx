import React from "react";
import "./Italian.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Food from "../../Assets/11.webp";

const Italian = () => {
  return (
    <div className="it3">
      <div className="was">
        <div className="it">
          <h2>Italian Restaurant</h2>
          <h1>Welcome</h1>
          <p className="it4">
            Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed
            fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac
            facilisis ligula sem id neque.
          </p>
          <div className="it1">
            <p>Our Story</p>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
      <div className="it2">
        <img src={Food} alt="" />
      </div>
    </div>
  );
};

export default Italian;
