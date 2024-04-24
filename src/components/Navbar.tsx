import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <span className="navbar-brand">ABCBarService</span>
        <ul className={`navbar-nav ${isOpen ? "show" : ""}`}>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/rentabartender"
              className={
                location.pathname === "/rentabartender" ? "active" : ""
              }
            >
              Rent A Bartender
            </Link>
          </li>
          <li>
            <Link
              to="/otherservices"
              className={location.pathname === "/otherservices" ? "active" : ""}
            >
              Other Services
            </Link>
          </li>
        </ul>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path fill="white" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </div>
      </div>
      <div className={`drawer-menu ${isOpen ? "show" : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={toggleMenu}
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/rentabartender"
              onClick={toggleMenu}
              className={
                location.pathname === "/rentabartender" ? "active" : ""
              }
            >
              Rent A Bartender
            </Link>
          </li>
          <li>
            <Link
              to="/otherservices"
              onClick={toggleMenu}
              className={location.pathname === "/otherservices" ? "active" : ""}
            >
              Other Services
            </Link>
          </li>
        </ul>
        <div className="drawer-menu-close" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="white"
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
