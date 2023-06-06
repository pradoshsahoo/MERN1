import React from "react";
import { AiFillStar } from "react-icons/ai";
// import "./card.css";
function Card({ title, image, rating, desc }) {
  return (
    <div
      id="card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="header">
        <div className="title">{title}</div>
        <div className="rate">{rating}/5</div>
      </div>
    </div>
  );
}
export default Card;
