import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import useResetScroll from "../../hook/useResetScroll";
import Navigation from "../../component/navigation/navigation";
import FeaturedBlog from "../../component/featured-blog/Featured-blog";
import Blog from "../../component/blog/Blog";
import featureBlogLogo from "../../assets/featured-blog.svg";
import sampleProfile1 from "../../assets/sample-profile-1.jpeg";
import sampleProfile2 from "../../assets/sample-profile-2.jpeg";
import sampleProfile3 from "../../assets/sample-profile-3.jpeg";
import sampleProfile4 from "../../assets/sample-profile-4.jpeg";
import sampleProfile5 from "../../assets/sample-profile-5.jpeg";
import sampleProfile6 from "../../assets/sample-profile-6.jpeg";
import "./home.scss";
const Home = () => {
  useResetScroll();
  const navigate = useNavigate();

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
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
      {/* featured blog post */}
      <section className="feature-section">
        <div className="wrapper">
          <h3 className="title">
            <img src={featureBlogLogo} alt="featureBlog logo" />
            Featured blog posts
          </h3>
          <div className="featuredBlog-container">
            <FeaturedBlog
              profilePic={sampleProfile1}
              bloggerName="Roland Bell"
              blogTitle="UX lessons from a poet who invented social media in the 18th century"
            />
            <FeaturedBlog
              profilePic={sampleProfile2}
              bloggerName="Tom Copper"
              blogTitle="Ukraine War, 1 February 2023: Operational Level"
            />
            <FeaturedBlog
              profilePic={sampleProfile3}
              bloggerName="Two Techie Vibes"
              blogTitle="Algorithms Unlocked: How They’re Shaping Our Everyday Lives"
            />
            <FeaturedBlog
              profilePic={sampleProfile4}
              bloggerName="Jyoti lyer"
              blogTitle="Good bot design means never having to say, “I’m sorry, I didn’t get that”"
            />
            <FeaturedBlog
              profilePic={sampleProfile5}
              bloggerName="Slvan Hermon"
              blogTitle="An out of Google experience"
            />
            <FeaturedBlog
              profilePic={sampleProfile6}
              bloggerName="Ryan Holiday"
              blogTitle="What We’re Reading: Your recommendations from across Medium"
            />
          </div>
        </div>
      </section>
      {/* blog post */}
      <section className="blog-section">
        <div className="wrapper blog-container">
          <aside className="discover-container">
            <div className="sticky">
              <h3>Discover more what matters to you</h3>
              <div className="topic-container">
                <Link to="/programming" className="topic">
                  Programming
                </Link>
                <Link to="/technology" className="topic">
                  Technology
                </Link>
                <Link to="/science" className="topic">
                  Science
                </Link>
                <Link to="/space" className="topic">
                  Space
                </Link>
                <Link to="/self" className="topic">
                  Self Improvement
                </Link>
                <Link to="/ai" className="topic">
                  Artificial Inteligence
                </Link>
              </div>
            </div>
          </aside>
          <div className="blog-post-container">
            <h3 className="title">
              <img src={featureBlogLogo} alt="featureBlog logo" />
              Blog posts
            </h3>
            <div className="blog">
              <Blog contentLink="blog-content" />
              <Blog contentLink="blog-content" />
              <Blog contentLink="blog-content" />
              <Blog contentLink="blog-content" />
              <Blog contentLink="blog-content" />
              <Blog contentLink="blog-content" />
              <Blog contentLink="blog-content" />
              <Blog contentLink="blog-content" />
              <Blog contentLink="blog-content" />
              <Blog contentLink="blog-content" />
              <Blog contentLink="blog-content" />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
