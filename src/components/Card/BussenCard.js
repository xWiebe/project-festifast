import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const FestivalCard = (props) => {
  return (
    <div className="festivalcard-container">
      <div className="festivalcard">
        <h2>
          {props.title} {props.date}
        </h2>
        <img src={props.imageUrl} alt={props.title} />
        <Link to={props.link}>
          <button>{props.buttonText}</button>
        </Link>
      </div>
    </div>
  );
};

export default FestivalCard;
