import React, { useState, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/Home.css";
import FestivalList from "../pages/FestivalList";

const Home = () => {
  const slideInterval = 5000;
  const [searchQuery, setSearchQuery] = useState("");
  const festivalListRef = useRef(null);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <div className="page">
      <Carousel
        showThumbs={false}
        showStatus={false}
        renderIndicator={() => null}
        renderArrowPrev={() => null}
        renderArrowNext={() => null}
        autoPlay
        interval={slideInterval}
        infiniteLoop
        className="custom-carousel"
      >
        <div className="carousel-slide">
          <img
            className="image"
            src="https://i.gyazo.com/5b22b829e2cfd67ab50dfcb6a5d2f731.jpg"
            alt="Festifast 1"
          />
        </div>
        <div className="carousel-slide">
          <img
            className="image"
            src="https://i.gyazo.com/a6a8deda9ec37d0422ec7c806e4040a9.jpg"
            alt="Festifast 2"
          />
        </div>
        <div className="carousel-slide">
          <img
            className="image"
            src="https://i.gyazo.com/016eddeba09d0c3c03b4b607d86e09ca.jpg"
            alt="Festifast 3"
          />
        </div>
        <div className="carousel-slide">
          <img
            className="image"
            src="https://i.gyazo.com/a5cfe18d8fa74fc8a4ebf938a94db1a1.jpg"
            alt="Festifast 3"
          />
        </div>
      </Carousel>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Zoeken..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>
      <div className="festival-list-container" ref={festivalListRef}>
        <FestivalList searchQuery={searchQuery} />{" "}
        {/* Pass the search query as a prop */}
      </div>
    </div>
  );
};

export default Home;
