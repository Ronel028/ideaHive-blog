import { useContext } from "react";
import { motion } from "framer-motion";
import { userContext } from "../../context/userContext";
import useResetScroll from "../../hook/useResetScroll";
import Navigation from "../../component/navigation/navigation";
import Blog from "../../component/blog/Blog";
import "./story.scss";
const Story = () => {
  // hook
  useResetScroll();
  const { blogList, setBlogList } = useContext(userContext);
  // hook

  // display blog list
  const blogs =
    blogList.length > 0
      ? blogList.map((blog, index) => {
          return (
            <Blog
              key={blog.id}
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
      : "";
  // display blog list

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <header className="story-header">
        <Navigation />
        <main className="wrapper story-main">
          <h1 className="heading">Stories, Ideas & News</h1>
          <p className="subheading">
            Stay ahead of the curve with the latest technology, news, and get
            knowledge from experience by other people.
          </p>
        </main>
      </header>
      <div className="wrapper story-list">
        <main className="blog">{blogs}</main>
      </div>
    </motion.div>
  );
};

export default Story;
