import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About </h2>
          <p>
            ABCBarService is your premier destination for professional
            bartending services. From private events to corporate functions,
            we're here to elevate your experience with exceptional hospitality
            and expertly crafted cocktails.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/rentabartender">Rent A Bartender</a>
            </li>
            <li>
              <a href="/otherservices">Other Services</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: abcbarservice@gmail.com</li>
            <li>Phone: +46735857628</li>
            <li>Address: Skuggvägen 4, 12352 Farsta</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ABCBarService. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
