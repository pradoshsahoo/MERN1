import React from "react";
// import { AiFillStar } from "react-icons/ai";
import "./card.css";
function Card({ title, country }) {
  return (
    <div id="card">
      <div className="header">
        <div className="title">{title}</div>
        <div className="title">{country}</div>
      </div>
    </div>
  );
}
export default Card;
