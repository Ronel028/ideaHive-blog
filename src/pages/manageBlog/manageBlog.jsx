import { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";
import DOMPurify from "dompurify";
import { userContext } from "../../context/userContext";
import useResetScroll from "../../hook/useResetScroll";
import { useTokenCheck } from "../../hook/tokenCheck";
import Navigation from "../../component/navigation/navigation";
import LoadingLG from "../../component/loadingLG/loading";
import profileAlt from "../../assets/profile-alt.jpeg";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./manageBlog.scss";

// alert message
const errorMessageAlert = (msg) => {
  toast.error(msg);
};
const updateSuccessMsg = (msg) => {
  toast.success(msg);
};
// alert message

const ManageBlog = () => {
  // hooks
  useResetScroll();
  const searchParams = useLocation().search;
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    fname: "",
    lname: "",
    profileImage: "",
    about: "",
    datePosted: "",
    blogTitle: "",
    blogContent: "",
  });
  const { setBlogList, isBlogUpdate, setIsBlogUpdate } =
    useContext(userContext);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [fetchingData, setFetchingData] = useState(false);
  // hooks

  // check if isBlogUpdate is true to display toast message
  useEffect(() => {
    if (isBlogUpdate) {
      updateSuccessMsg("Blog updated.");
    }
    setIsBlogUpdate(false);
  }, []);
  // check if isBlogUpdate is true to display toast message

  // use this function to validate this page if login or not
  useTokenCheck();
  // use this function to validate this page if login or not

  // get blog id from url
  const blogId = new URLSearchParams(searchParams).get("blogId");
  // get blog id from url

  // get blog data using id
  useEffect(() => {
    const getBlogDataById = async () => {
      try {
        setFetchingData(true);
        const blogData = await axios.get(
          `https://idea-h-ive-blog.vercel.app/blog/blog-content?blogID=${blogId}`
        );
        if (blogData.data.blog.length > 0) {
          setBlog({
            ...blog,
            fname: blogData.data.blog[0].fname,
            lname: blogData.data.blog[0].lname,
            profileImage: blogData.data.blog[0].profileImage,
            about: blogData.data.blog[0].about,
            datePosted: blogData.data.blog[0].datePosted,
            blogTitle: blogData.data.blog[0].blogTitle,
            blogContent: blogData.data.blog[0].blogContent,
          });
        } else {
          throw blogData.data.msg;
        }
        setFetchingData(false);
      } catch (error) {
        navigate("/account-settings");
      }
    };
    getBlogDataById();
  }, []);
  // get blog data using id

  // delete blog
  const deleteUserBlog = () => {
    try {
      confirmAlert({
        title: "Delete blog",
        message: "Are you sure to do this?",
        buttons: [
          {
            label: "Yes",
            onClick: async () => {
              setDeleteLoading(true);
              const deleteBlog = await axios.delete(
                `https://idea-h-ive-blog.vercel.app/blog/delete-blog?blogId=${blogId}`
              );
              if (deleteBlog.data.msg === "success") {
                setBlogList(deleteBlog.data.blogList);
                navigate("/account-settings");
              } else {
                throw deleteBlog.data.msg;
              }
              setDeleteLoading(false);
            },
          },
          {
            label: "No",
            onClick: () => {},
          },
        ],
        closeOnClickOutside: false,
      });
    } catch (error) {
      errorMessageAlert(error.error);
    }
  };
  // delete blog

  // delete loading
  const loadingDelete = deleteLoading ? (
    <LoadingLG loadingWord="Deleting. Please wait..." />
  ) : (
    ""
  );
  // delete loading

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <header>
        <Navigation />
      </header>

      {/* alert error message */}
      <Toaster position="top-right" reverseOrder={false} />
      {/* alert error message */}

      {/* loading while deleting */}
      {loadingDelete}
      {/* loading while deleting */}

      <main className="update-content-main">
        <div className="wrapper blog-content">
          {fetchingData ? (
            <p>Loading content, please hold on...</p>
          ) : (
            <>
              <div className="blog-content-left">
                <div className="profile-container">
                  <div className="profile">
                    <div className="image-container">
                      <img
                        src={
                          blog.profileImage === "N/A"
                            ? profileAlt
                            : blog.profileImage
                        }
                        alt={`${blog.fname} ${blog.lname}`}
                      />
                    </div>
                    <div className="name-container">
                      <h5>{`${blog.fname} ${blog.lname}`}</h5>
                      <p>Publish - {moment(blog.datePosted).format("LL")}</p>
                    </div>
                  </div>
                  <div className="action">
                    <Link
                      to={`/update-blog?blogId=${blogId}`}
                      className="update-blog"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 21H5C3.89 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3H19C20.11 3 21 3.89 21 5V10.33C20.7 10.21 20.37 10.14 20.04 10.14C19.67 10.14 19.32 10.22 19 10.37V5H5V19H10.11L10 19.11V21ZM7 9H17V7H7V9ZM7 17H12.11L14 15.12V15H7V17ZM7 13H16.12L17 12.12V11H7V13ZM21.7 13.58L20.42 12.3C20.3172 12.1992 20.179 12.1428 20.035 12.1428C19.891 12.1428 19.7528 12.1992 19.65 12.3L18.65 13.3L20.7 15.35L21.7 14.35C21.8008 14.2472 21.8572 14.109 21.8572 13.965C21.8572 13.821 21.8008 13.6828 21.7 13.58ZM12 22H14.06L20.11 15.93L18.06 13.88L12 19.94V22Z"
                          fill="#0A4B88"
                        />
                      </svg>
                    </Link>
                    <button className="delete-blog" onClick={deleteUserBlog}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 9H10.5V18H9V9ZM13.5 9H15V18H13.5V9Z"
                          fill="#C63434"
                        />
                        <path
                          d="M3 4.5V6H4.5V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6H21V4.5H3ZM6 21V6H18V21H6ZM9 1.5H15V3H9V1.5Z"
                          fill="#C63434"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="content">
                  <h1>{blog.blogTitle}</h1>
                  <div
                    className="markdown-output"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(blog.blogContent),
                    }}
                  ></div>
                </div>
              </div>
              <div className="blog-content-right">
                <div className="sticky">
                  <div className="image-container">
                    <img
                      src={
                        blog.profileImage === "N/A"
                          ? profileAlt
                          : blog.profileImage
                      }
                      alt={`${blog.fname} ${blog.lname}`}
                    />
                  </div>
                  <h5>{`${blog.fname} ${blog.lname}`}</h5>
                  <p className="about">{blog.about}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </motion.div>
  );
};

export default ManageBlog;
