import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Signin from "./pages/signin/Signin";
import Story from "./pages/blog/Story";
import BlogContent from "./pages/blogContent/BlogContent";
import Profile from "./pages/profile/Profile";
import ManageBlog from "./pages/manageBlog/manageBlog";
import UpdateProfile from "./pages/updateProfile/updateProfile";
import AddBlog from "./pages/addBlog/addBlog";
import UpdateBlog from "./pages/updateBlog/updateBlog";
import Category from "./pages/category/category";
import { userContext } from "./context/userContext";
import getUserData from "./hook/getUserData";
import getBlogData from "./hook/getBlogList";

function App() {
  const [user, setUser] = getUserData(
    "https://idea-h-ive-blog.vercel.app/user/info"
  );
  const [blogList, setBlogList] = getBlogData(
    "https://idea-h-ive-blog.vercel.app/blog/get-blog"
  );
  const [isBlogUpdate, setIsBlogUpdate] = useState(false);

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        blogList,
        setBlogList,
        isBlogUpdate,
        setIsBlogUpdate,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/story" element={<Story />} />
        <Route path="/category" element={<Category />} />
        <Route path="/blog-content" element={<BlogContent />} />
        <Route path="/account-settings" element={<Profile />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/manage-blog" element={<ManageBlog />} />
        <Route path="/post-blog" element={<AddBlog />} />
        <Route path="/update-blog" element={<UpdateBlog />} />
      </Routes>
    </userContext.Provider>
  );
}

export default App;
