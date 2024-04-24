import Articles from "./Articles";
// import Text from "./Text";
import "./Home.css";
import Slider from "./Slider";

function Home() {
  return (
    <div className="home-content">
      <Slider />
      <div className="main-container-home">
        <Articles />
        {/* <Text /> */}
      </div>
    </div>
  );
}

export default Home;
