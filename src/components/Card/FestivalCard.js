import React from "react";
import "./FestivalCard.css";
import TempCard from "./TempCard";

const FestivalCard = (props) => {
  const handleClick = () => {
    props.onClick();
  };

  const renderDates = () => {
    // Check if there are multiple dates
    if (props.festivalBuses.length > 1) {
      // Join the dates with a comma
      return props.festivalBuses.map((bus) => bus.datum).join(", ");
    } else {
      // Only one date, display it as is
      return props.festivalBuses[0].datum;
    }
  };

  return (
    <div className="festivalcard-container">
      <div className="festivalcard" onClick={handleClick}>
        <img src={props.imageUrl} alt={props.description} />
        <div className="festivalcard-details">
          <p className="festivalcard-title">{props.description}</p>
          <p className="festivalcard-dates">{renderDates()}</p>
        </div>
        {props.expanded && (
          <div className="tempcard-container">
            <TempCard
              festival={props.description}
              paymentLink={props.festivalBuses[0].paymentLink} // Use the paymentLink of the first festival bus
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FestivalCard;
