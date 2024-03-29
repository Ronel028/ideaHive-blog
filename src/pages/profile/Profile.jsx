import { useContext, useEffect, useState } from "react";
import axios from "axios";
import cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";
import { userContext } from "../../context/userContext";
import useResetScroll from "../../hook/useResetScroll";
import { useTokenCheck } from "../../hook/tokenCheck";
import Blog from "../../component/blog/Blog";
import Navigation from "../../component/navigation/navigation";
import altProfile from "../../assets/profile-alt.jpeg";
import "./profile.scss";

// alert message
const updateSuccessMsg = (msg) => {
  toast.success(msg);
};
// alert message

const Profile = () => {
  // hooks
  useResetScroll(); // reset the window location set to top when this page is active
  const navigate = useNavigate();
  const { user, blogList, isBlogUpdate, setIsBlogUpdate } =
    useContext(userContext); //call the context api
  const [userBlog, setUserBlog] = useState([]); // storage for user blog post
  const [userBlogLoad, setUserBlogLoad] = useState(false);
  // hooks

  // use this function to validate this page if login or not
  useTokenCheck();
  // use this function to validate this page if login or not

  // check if isBlogUpdate is true to display toast message
  useEffect(() => {
    if (isBlogUpdate) {
      updateSuccessMsg("Profile updated.");
    }
    setIsBlogUpdate(false);
  }, []);
  // check if isBlogUpdate is true to display toast message

  // get user's blog and display to the user's profile page
  useEffect(() => {
    const userBlogList = async () => {
      try {
        setUserBlogLoad(true);
        const userBlog = await axios.get(
          "https://api-ideahive.vercel.app/blog/user-blog",
          {
            headers: {
              Authorization: `Bearer ${cookies.get("access_token")}`,
            },
          }
        );
        if (userBlog.data.msg === "success") {
          setUserBlog(userBlog.data.userBlog);
          setUserBlogLoad(false);
        } else {
          throw userBlog.data.msg;
        }
      } catch (error) {}
    };
    userBlogList();
  }, []);
  // get user's blog and display to the user's profile page

  // blog list component
  const userBlogCom =
    userBlog.length > 0 ? (
      userBlog.map((blog, index) => {
        return (
          <Blog
            key={blog.id}
            contentLink={`manage-blog?blogId=${blog.id}`}
            featuredImage={blog.featuredImage}
            profileImage={blog.profileImage}
            bloggerName={`${blog.fname} ${blog.lname}`}
            blogTitle={blog.blogTitle}
            blogSumary={blog.summary}
            datePosted={blog.datePosted}
          />
        );
      })
    ) : (
      <p>No blog post available</p>
    );
  // blog list component

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      {/* <header> */}
      <Navigation />
      {/* </header> */}

      {/* alert error message */}
      <Toaster position="top-right" reverseOrder={false} />
      {/* alert error message */}

      <main className="profile-main">
        <div className="wrapper profile-container">
          <div className="profile-title">
            <h3>Profile Information</h3>
            <div className="edit-profile-container">
              <Link to="/update-profile" className="edit-profile">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15.75H3.75C2.9175 15.75 2.25 15.0825 2.25 14.25V3.75C2.25 2.9175 2.9175 2.25 3.75 2.25H14.25C15.0825 2.25 15.75 2.9175 15.75 3.75V7.7475C15.525 7.6575 15.2775 7.605 15.03 7.605C14.7525 7.605 14.49 7.665 14.25 7.7775V3.75H3.75V14.25H7.5825L7.5 14.3325V15.75ZM5.25 6.75H12.75V5.25H5.25V6.75ZM5.25 12.75H9.0825L10.5 11.34V11.25H5.25V12.75ZM5.25 9.75H12.09L12.75 9.09V8.25H5.25V9.75ZM16.275 10.185L15.315 9.225C15.2379 9.14942 15.1342 9.10708 15.0262 9.10708C14.9183 9.10708 14.8146 9.14942 14.7375 9.225L13.9875 9.975L15.525 11.5125L16.275 10.7625C16.3506 10.6854 16.3929 10.5817 16.3929 10.4738C16.3929 10.3658 16.3506 10.2621 16.275 10.185ZM9 16.5H10.545L15.0825 11.9475L13.545 10.41L9 14.955V16.5Z"
                    fill="#0A4B88"
                  />
                </svg>
                Edit profile
              </Link>
            </div>
          </div>
          <div className="profile">
            <div className="profile-image">
              <img
                src={user.Image === "N/A" ? altProfile : user.Image}
                alt={`${user.fname} ${user.lname}`}
              />
            </div>
            <div className="profile-name">
              <h4 className="name">{`${user.fname} ${user.lname}`}</h4>
              <p className="email">{user.email}</p>
              <p className="join">
                Join - {moment(user.dateJoined).format("ll")}
              </p>
            </div>
          </div>
          <div className="about-container">
            <h2 className="about">About</h2>
            <p>{user.about === "N/A" ? "N/A" : user.about}</p>
          </div>
          <div className="profile-blog">
            <h2>Blog</h2>
            <main className="blog">
              {userBlogLoad ? (
                <p>Loading your blog. Please wait...</p>
              ) : (
                userBlogCom
              )}
            </main>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Profile;
