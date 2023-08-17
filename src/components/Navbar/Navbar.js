import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Title from "../Text/Title";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsList } from "react-icons/bs";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const festivalListRef = useRef(null);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen && festivalListRef.current) {
      festivalListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <Title />
      </Link>
      {/* <div className="navbar-items">
        <ul className={`navbar-menu${isMobileMenuOpen ? " open" : ""}`}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to={{ hash: "#festivallist" }}>Bussen</Link>
          </li>
        </ul>
        <div
          className="dropdown-toggle-wrapper"
          onClick={handleMobileMenuToggle}
        >
          <BsList className="dropdown-toggle-icon" />
        </div>
        {isMobileMenuOpen && (
          <ul className="dropdown-menu-mobile">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to={{ hash: "#festivallist" }}>Bussen</Link>
            </li>
          </ul>
        )}
      </div> */}
    </nav>
  );
}

export default Navbar;
