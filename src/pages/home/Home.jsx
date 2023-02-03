import { Link } from "react-router-dom";
import Navigation from "../../component/navigation/navigation";
import FeaturedBlog from "../../component/featured-blog/Featured-blog";
import featureBlogLogo from "../../assets/featured-blog.svg";
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
      <section className="feature-section">
        <div className="wrapper">
          <h3 className="title">
            <img src={featureBlogLogo} alt="featureBlog logo" />
            Featured blog posts
          </h3>
          <div className="featuredBlog-container">
            <FeaturedBlog />
            <FeaturedBlog />
            <FeaturedBlog />
            <FeaturedBlog />
            <FeaturedBlog />
            <FeaturedBlog />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
