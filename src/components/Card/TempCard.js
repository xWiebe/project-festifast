import React from "react";
import { Link } from "react-router-dom";
import "./TempCard.css";

const TempCard = (props) => {
  return (
    <div className="tempcard-container">
      <div className="tempcard">
        <iframe
          src={props.paymentLink}
          title="Ik Ben Aanwezig Shop"
          width="100%"
          height="460"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default TempCard;
