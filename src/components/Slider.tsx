import { useState } from "react";
import "./Slider.css";

function Slider() {
  const elements = [
    <div>
      <h2>Crafting Memorable Moments</h2>
      <img src="src/assets/Cocktails.jpeg" alt="Cocktail Image 1" />
    </div>,
    <div>
      <h2>Elevate Your Event</h2>
      <img src="src/assets/Cocktails.jpeg" alt="Cocktail Image 2" />
    </div>,
    <div>
      <h2>"We couldn't be happier with the service from ABC Bar Service!"</h2>
      <img src="src/assets/Cocktails.jpeg" alt="Customer Photo 1" />
    </div>,
    <div>
      <h2>"Highly recommended! The bartenders were amazing!"</h2>
      <img src="src/assets/Cocktails.jpeg" alt="Customer Photo 2" />
    </div>,
    <div>
      <h2>Customized Cocktails</h2>
      <img src="src/assets/Cocktails.jpeg" alt="Cocktail Icon" />
    </div>,
    <div>
      <h2>Expert Bartenders</h2>
      <img src="src/assets/Main.jpeg" alt="Bartender Icon" />
    </div>,
    <div>
      <h2>Weddings</h2>
      <img src="src/assets/Cocktails.jpeg" alt="Wedding Illustration" />
    </div>,
    <div>
      <h2>Corporate Events</h2>
      <img src="src/assets/Cocktails.jpeg" alt="Wedding Illustration" />
    </div>,
    <div>
      <h2>Spice up your Halloween Party!</h2>
      <img src="src/assets/Cocktails.jpeg" alt="Halloween Cocktails" />
    </div>,
    <div>
      <h2>Toast to the New Year!</h2>
      <img src="src/assets/Cocktails.jpeg" alt="New Year Champagne" />
    </div>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === elements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? elements.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <div className="slider-navigation">
        <button onClick={handlePrev} className="left-arrow">
          &#8249;
        </button>
        <div className="slider-element">{elements[currentIndex]}</div>{" "}
        {/* Current element */}
        <button onClick={handleNext} className="right-arrow">
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Slider;
