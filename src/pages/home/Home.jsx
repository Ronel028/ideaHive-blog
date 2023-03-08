import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { userContext } from "../../context/userContext";
import useResetScroll from "../../hook/useResetScroll";
import Navigation from "../../component/navigation/navigation";
import FeaturedBlog from "../../component/featured-blog/Featured-blog";
import Blog from "../../component/blog/Blog";
import featureBlogLogo from "../../assets/featured-blog.svg";
import "./home.scss";

const Home = () => {
  // hook
  useResetScroll();
  const { blogList } = useContext(userContext);
  // hook

  // blog list for featured blog
  const featuredBlog =
    blogList.length > 0 ? (
      blogList
        .filter((item, index) => index < 6)
        .map((blog, index) => {
          return (
            <FeaturedBlog
              key={index}
              profilePic={blog.profileImage}
              bloggerName={`${blog.fname} ${blog.lname}`}
              blogTitle={blog.blogTitle}
              blogPublish={blog.datePosted}
            />
          );
        })
    ) : (
      <p>No blog post available</p>
    );
  // blog list for featured blog

  // blog list
  const blogPost =
    blogList.length > 0 ? (
      blogList.map((blog, index) => {
        return (
          <Blog
            key={index}
            contentLink="blog-content"
            featuredImage={blog.featuredImage}
            profileImage={blog.profileImage}
            name={`${blog.fname} ${blog.lname}`}
            blogTitle={blog.blogTitle}
            blogSummary={blog.summary}
            datePosted={blog.datePosted}
          />
        );
      })
    ) : (
      <p>No blog post available</p>
    );
  // blog list

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
          <div className="featuredBlog-container">{featuredBlog}</div>
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
            <div className="blog">{blogPost}</div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
