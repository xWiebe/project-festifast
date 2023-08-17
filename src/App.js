import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FestivalList from "./pages/FestivalList";
import FestivalDetails from "./pages/FestivalDetails";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/festivallist" element={<FestivalList />} />
          <Route path="/festivals/:id" element={<FestivalDetails />} />
          <Route></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
