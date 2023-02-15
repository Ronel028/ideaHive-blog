import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Signin from "./pages/signin/Signin";
import Story from "./pages/blog/Story";
import BlogContent from "./pages/blogContent/BlogContent";
import Profile from "./pages/profile/Profile";
import BlogUpdate from "./pages/blogUpdate/blogUpdate";
import UpdateProfile from "./pages/updateProfile/updateProfile";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/story" element={<Story />} />
      <Route path="/blog-content" element={<BlogContent />} />
      <Route path="/account-settings" element={<Profile />} />
      <Route path="/update-profile" element={<UpdateProfile />} />
      <Route path="/blog-update" element={<BlogUpdate />} />
    </Routes>
  );
}

export default App;
