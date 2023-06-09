import React from "react";
// import { AiFillStar } from "react-icons/ai";
import "./card.css";
function Card({ title, image }) {
  return (
    <div
      id="card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="header">
        <div className="title">{title}</div>
      </div>
    </div>
  );
}
export default Card;
