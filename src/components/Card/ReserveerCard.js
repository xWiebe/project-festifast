import React from "react";
import "./Card.css";

const FestivalCard = (props) => {
  return (
    <div className="festivalcard-container">
      <div className="festivalcard">
        <h2>{props.title}</h2>
        <p>{props.opstapplekken}</p>
        <img src={props.imageUrl} alt={props.title} />
        <p>Beschikbare plekken: {props.beschikbareplekken}</p>
        <p>{props.description}</p>
        <p>{props.date}</p>
        <h2>Prijs: {props.price}</h2>
        <button>{props.buttonText}</button>
      </div>
    </div>
  );
};

export default FestivalCard;
