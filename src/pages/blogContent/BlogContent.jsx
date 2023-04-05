import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import DOMPurify from "dompurify";
import { userContext } from "../../context/userContext";
import useResetScroll from "../../hook/useResetScroll";
import Navigation from "../../component/navigation/navigation";
import "./blogContent.scss";
const BlogContent = () => {
  useResetScroll();

  const { blogList, setBlogList } = useContext(userContext);
  const [dataFetching, setDataFetching] = useState(false);

  const [blogContent, setBlogContent] = useState({
    fname: "",
    lname: "",
    about: "",
    profileImage: "",
    datePosted: "",
    blogTitle: "",
    blogContent: "",
  });
  const navigate = useNavigate();
  const search = useLocation().search;
  const blogID = new URLSearchParams(search).get("blogID");

  useEffect(() => {
    const getBlog = async () => {
      try {
        setDataFetching(true);
        const blog = await axios.get(
          `https://api-ideahive.vercel.app/blog/blog-content?blogID=${blogID}`
        );
        if (blog.data.blog.length > 0) {
          setBlogContent({
            ...blogContent,
            fname: blog.data.blog[0].fname,
            lname: blog.data.blog[0].lname,
            about: blog.data.blog[0].about,
            profileImage: blog.data.blog[0].profileImage,
            datePosted: blog.data.blog[0].datePosted,
            blogTitle: blog.data.blog[0].blogTitle,
            blogContent: blog.data.blog[0].blogContent,
          });
        } else {
          throw blog.data.msg;
        }
        setDataFetching(false);
      } catch (error) {
        navigate("/");
      }
    };
    getBlog();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <header>
        <Navigation />
      </header>
      <main className="blog-content-main">
        <div className="wrapper blog-content">
          {dataFetching ? (
            <p>Loading content, please hold on...</p>
          ) : (
            <>
              <div className="blog-content-left">
                <div className="profile-container">
                  <div className="image-container">
                    <img src={blogContent.profileImage} alt="" />
                  </div>
                  <div className="name-container">
                    <h5>{`${blogContent.fname} ${blogContent.lname}`}</h5>
                    <p>
                      Publish - {moment(blogContent.datePosted).format("LL")}
                    </p>
                  </div>
                </div>
                <div className="content">
                  <h1>{blogContent.blogTitle}</h1>
                  <div
                    className="markdown-output"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(blogContent.blogContent),
                    }}
                  ></div>
                </div>
              </div>
              <div className="blog-content-right">
                <div className="sticky">
                  <div className="image-container">
                    <img src={blogContent.profileImage} alt="" />
                  </div>
                  <h5>{`${blogContent.fname} ${blogContent.lname}`}</h5>
                  <p className="about">{blogContent.about}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </motion.div>
  );
};

export default BlogContent;
