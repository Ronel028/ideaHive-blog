import { motion } from "framer-motion";
import useResetScroll from "../../hook/useResetScroll";
import Navigation from "../../component/navigation/navigation";
import FeaturedBlog from "../../component/featured-blog/Featured-blog";
import Blog from "../../component/blog/Blog";
import featureBlogLogo from "../../assets/featured-blog.svg";
import sampleProfile1 from "../../assets/sample-profile-1.jpeg";
import "./story.scss";
const Story = () => {
  useResetScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <header className="story-header">
        <Navigation />
        <main className="wrapper story-main">
          <h1 className="heading">Stories & Ideas</h1>
          <p className="subheading">
            Stay ahead of the curve with the latest technology and news, and get
            inspired by real-life stories of people
          </p>
        </main>
      </header>
      <div className="wrapper story-list">
        <aside className="featured-blog">
          <div className="sticky">
            <h3 className="title">
              <img src={featureBlogLogo} alt="featureBlog logo" />
              Featured blog posts
            </h3>
            <div className="list">
              <FeaturedBlog
                profilePic={sampleProfile1}
                bloggerName="Roland Bell"
                blogTitle="UX lessons from a poet who invented social media in the 18th century"
              />
              <FeaturedBlog
                profilePic={sampleProfile1}
                bloggerName="Roland Bell"
                blogTitle="UX lessons from a poet who invented social media in the 18th century"
              />
              <FeaturedBlog
                profilePic={sampleProfile1}
                bloggerName="Roland Bell"
                blogTitle="UX lessons from a poet who invented social media in the 18th century"
              />
              <FeaturedBlog
                profilePic={sampleProfile1}
                bloggerName="Roland Bell"
                blogTitle="UX lessons from a poet who invented social media in the 18th century"
              />
            </div>
          </div>
        </aside>
        <main className="blog">
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
          <Blog contentLink="blog-content" />
        </main>
      </div>
    </motion.div>
  );
};

export default Story;
