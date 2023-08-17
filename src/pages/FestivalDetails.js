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

  // Filter the festivals based on the search query
  const filteredFestivals = festivals.filter((festival) =>
    festival.festival.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group the filtered festivals by festival name
  const groupedFestivals = filteredFestivals.reduce((acc, festival) => {
    const key = festival.festival;
    if (!acc[key]) {
      acc[key] = festival;
    }
    return acc;
  }, {});

  return (
    <div className="festivalcard-container">
      <h3>Wij rijden naar:</h3>
      {Object.entries(groupedFestivals).map(([festivalName, festival]) => (
        <div key={festivalName}>
          <FestivalCard
            imageUrl={festival.imageLink}
            description={festival.festival}
            date={festival.datum}
            buttonText="Expand"
            onClick={() => handleFestivalClick(festivalName)}
            expanded={expandedFestival === festivalName}
            festivalBuses={[festival]} // Pass the festival object as an array to FestivalCard
          />
        </div>
      ))}
    </div>
  );
};

export default FestivalList;
