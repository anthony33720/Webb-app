import { Link } from "react-router-dom";
import "./OtherServices.css";

function OtherServices() {
  return (
    <div className="other-services-page">
      <h2 className="pages-title">What we propose:</h2>
      <h3 className="pages-title">
        At ABCBarService, we pride ourselves on offering more than just
        exceptional bartending. Our range of additional services is designed to
        elevate your event experience and ensure every aspect is covered with
        expertise and professionalism.
      </h3>
      <div className="box-container">
        <div className="box-1">
          <h3>Tasting Experiences</h3>
          <p>
            Indulge in a sensory journey with our curated tasting experiences.
            Whether you're exploring the nuances of fine wines, sampling premium
            spirits, or discovering the art of craft cocktails, our tastings are
            a delightful way to engage your palate and deepen your appreciation
            for quality libations. Contact us to arrange a bespoke tasting event
            tailored to your preferences.
          </p>
          <Link to="/contact">
            <button type="button">Request a quote</button>
          </Link>
        </div>
        <img
          src="src/assets/Wine-tasting.jpeg"
          alt="Corporate Event Illustration"
        />
        <div className="box-2">
          <h3>Cocktail course</h3>
          <p>
            Unleash your inner mixologist with our cocktail courses led by our
            expert bartenders. Learn the secrets behind crafting classic
            cocktails, master the art of mixology techniques, and discover
            creative recipes to impress your guests at home or in one of our
            venue. Our courses are perfect for private gatherings, team-building
            events, or simply a fun night out with friends. Explore our course
            offerings and book your spot today.
          </p>
          <a
            href="https://www.bartendrr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button">Learn more about our services</button>
          </a>
        </div>
        <img
          src="src/assets/Cocktails.jpeg"
          alt="Corporate Event Illustration"
        />

        <div className="box-3">
          <h3>Mixologist Services</h3>
          <p>
            Elevate your event with the expertise of our skilled mixologists.
            Whether you're hosting an intimate dinner party, a corporate
            function, or a lavish wedding reception, our mixologists will craft
            bespoke cocktails that perfectly complement your event theme and
            delight your guests' taste buds. From custom creations to flawless
            execution, we'll ensure every drink is a masterpiece.
          </p>
          <Link to="/contact">
            <button type="button">Get informations</button>
          </Link>
        </div>
        <img src="src/assets/Main.jpeg" alt="Corporate Event Illustration" />
        <div className="box-4">
          <h3>Bar Consultant</h3>
          <p>
            Looking to take your bar program to the next level? Our bar
            consulting services are here to help. Whether you're opening a new
            venue, revamping an existing bar, or seeking guidance on menu
            development and staff training, our experienced consultants will
            provide tailored solutions to meet your needs. Let us help you
            create a bar experience that exceeds expectations and leaves a
            lasting impression.
          </p>
          <Link to="/contact">
            <button type="button">Contact us!</button>
          </Link>
        </div>
        <img
          src="src/assets/Consultant.jpeg"
          alt="Corporate Event Illustration"
        />
        <h3 className="pages-title">
          Ready to elevate your event with our premium services? Contact us
          today to discuss your requirements and request a personalized quote.
          We look forward to bringing your vision to life and exceeding your
          expectations with our unmatched expertise and dedication to
          excellence.
        </h3>
      </div>
    </div>
  );
}

export default OtherServices;
