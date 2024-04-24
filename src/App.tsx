import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactUsPage from "./components/ContactUsPage";
import RentABartender from "./components/RentABartender";
import OtherServices from "./components/OtherServices";
import "./components/Navbar.css";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/rentabartender" element={<RentABartender />} />
        <Route path="/otherservices" element={<OtherServices />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
