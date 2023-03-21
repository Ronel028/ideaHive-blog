import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { userContext } from "../../context/userContext";
import useResetScroll from "../../hook/useResetScroll";
import Navigation from "../../component/navigation/navigation";
import Blog from "../../component/blog/Blog";
import "./category.scss";
const Category = () => {
  // hook
  useResetScroll();
  const { blogList, setBlogList } = useContext(userContext);
  const urlParams = useLocation().search;
  // hook

  //   get cetegory query params value in the url
  const category = new URLSearchParams(urlParams).get("cat");
  //   get cetegory query params value in the url

  const categoryCapitalize =
    category.charAt(0).toUpperCase() + category.slice(1);
  const modifiedCategory = categoryCapitalize.replace("-", " ");

  //   filter blog data by category
  const filterBlog = blogList.filter((blog) => blog.category === category);
  //   filter blog data by category

  // display blog list
  const blogs =
    blogList.length > 0 ? (
      filterBlog.length > 0 ? (
        filterBlog.map((blog, index) => {
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
      ) : (
        <h3>No blog post found...</h3>
      )
    ) : (
      <h3>No blog post found...</h3>
    );

  // display blog list

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <header className="category-header">
        <Navigation />
        <main className="wrapper category-main">
          <h1 className="heading">{modifiedCategory}</h1>
          <p className="subheading">
            List of all {modifiedCategory} blog shared by ideaHive user.
          </p>
        </main>
      </header>
      <div className="wrapper story-list">
        <main className="blog">{blogs}</main>
      </div>
    </motion.div>
  );
};

export default Category;
