import React, { useState } from "react";
import FestivalCard from "../components/Card/FestivalCard";
import { festivals } from "../components/Data/festivalsData";
import "./styles/FestivalList.css";

const FestivalList = ({ searchQuery }) => {
  const [expandedFestival, setExpandedFestival] = useState(null);

  const handleFestivalClick = (festivalName) => {
    setExpandedFestival((prevExpandedFestival) =>
      prevExpandedFestival === festivalName ? null : festivalName
    );
  };

  // Filter the festivals based on the search query (bus number)
  const filteredFestivals = festivals.filter((festival) =>
    festival.festival.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group the filtered festivals by festival name
  const groupedFestivals = filteredFestivals.reduce((acc, festival) => {
    const key = festival.festival;
    if (!acc[key]) {
      acc[key] = [festival];
    } else {
      acc[key].push(festival);
    }
    return acc;
  }, {});

  return (
    <div className="festivalcard-container">
      <h3>Wij rijden naar:</h3>
      {Object.entries(groupedFestivals).map(([festivalName, festivals]) => (
        <div key={festivalName}>
          <FestivalCard
            imageUrl={festivals[0].imageLink}
            description={festivals[0].festival}
            date={festivals[0].datum}
            buttonText="Expand"
            onClick={() => handleFestivalClick(festivalName)}
            expanded={expandedFestival === festivalName}
            festivalBuses={festivals}
          />
        </div>
      ))}
    </div>
  );
};

export default FestivalList;
