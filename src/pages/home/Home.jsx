import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { userContext } from "../../context/userContext";
import useResetScroll from "../../hook/useResetScroll";
import Navigation from "../../component/navigation/navigation";
import FeaturedBlog from "../../component/featured-blog/Featured-blog";
import Blog from "../../component/blog/Blog";
import featureBlogLogo from "../../assets/featured-blog.svg";
import backgroundHeader from "../../assets/background-header.jpg";
import "./home.scss";

const Home = () => {
  // hook
  useResetScroll();
  const { blogList } = useContext(userContext);
  // hook

  // blog list for featured blog
  const featuredBlog =
    blogList.length > 0 ? (
      [...blogList]
        .sort(() => Math.random() - 0.5)
        .slice(0, 6)
        .map((blog, index) => {
          return (
            <FeaturedBlog
              key={index}
              userID={blog.id}
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
            contentLink={`blog-content?blogID=${blog.id}`}
            featuredImage={blog.featuredImage}
            profileImage={blog.profileImage}
            bloggerName={`${blog.fname} ${blog.lname}`}
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
        <main
          className="hero"
          style={{
            backgroundImage: `url(${backgroundHeader})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="wrapper">
            <h1>Your daily dose of News, Life Experiences, and More</h1>
            <p>Expand your knowledge and learn something new every day.</p>
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
                <Link to="/category?cat=programming" className="topic">
                  Programming
                </Link>
                <Link to="/category?cat=technology" className="topic">
                  Technology
                </Link>
                <Link to="/category?cat=science" className="topic">
                  Science
                </Link>
                <Link to="/category?cat=space" className="topic">
                  Space
                </Link>
                <Link to="/category?cat=daily-life" className="topic">
                  Daily life
                </Link>
                <Link to="/category?cat=self-improvement" className="topic">
                  Self Improvement
                </Link>
                <Link
                  to="/category?cat=artificial-inteligence"
                  className="topic"
                >
                  Artificial Inteligence
                </Link>
                <Link to="/category?cat=anime" className="topic">
                  Anime
                </Link>
                <Link to="/category?cat=movies" className="topic">
                  Movies
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
