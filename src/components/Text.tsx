import { Link } from "react-router-dom";
import "./Text.css";

function Text() {
  return (
    <div className="text-container">
      <div className="links-container">
        <Link to="/rentabartender">Rent A Bartender</Link>
        <Link to="/otherservices">Other Services</Link>
      </div>
      <p className="contact-text">
        Contact us for affordable options tailored to your needs. We're here to
        help!
      </p>
    </div>
  );
}

export default Text;
