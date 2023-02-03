import { Link } from "react-router-dom";
import Navigation from "../../component/navigation/navigation";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <Navigation />
        <main className="hero">
          <div className="wrapper">
            <h1>Discover insights and inspiration</h1>
            <p>Sharing stories that inspire change</p>
            <div className="cta-container">
              <Link to="/story" className="hero-cta" id="btn">
                Start Reading
              </Link>
            </div>
          </div>
        </main>
      </header>
    </div>
  );
};

export default Home;
