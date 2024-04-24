import { Link } from "react-router-dom";
import "./Articles.css";

function Articles() {
  return (
    <div>
      <h2 className="articles-title">ABC Bar Service</h2>
      <p className="resume-text">
        Welcome to ABC Bar Service, where we bring the art of mixology to your
        event. Our experienced team of bartenders and mixologists are dedicated
        to providing top-notch service and crafting exquisite cocktails that
        will delight your guests.
      </p>
      <div className="articles-container">
        <div className="article-1">
          <h3>The Perfect Cocktail Experience</h3>
          <p>
            Dive into a world of flavor with our expertly crafted cocktails.
            From classic favorites to innovative creations, our bartenders will
            elevate your event with their skill and precision. Whether you're
            hosting a wedding, corporate gathering, or private party, we'll
            ensure that every drink is a masterpiece.
          </p>
          <Link to="/contact">
            <button type="button">Get yourself a private bartender</button>
          </Link>
        </div>
        <div className="article-2">
          <h3>Unleash Your Inner Mixologist</h3>
          <p>
            Join us for a hands-on cocktail course and discover the secrets
            behind your favorite drinks. Led by our talented mixologists, you'll
            learn essential techniques, explore unique ingredients, and unleash
            your creativity behind the bar. Whether you're a novice or a
            seasoned enthusiast, our courses are designed to inspire and
            entertain.
          </p>
          <Link to="/otherservices">
            <button type="button">Learn more about our services</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Articles;
