import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Signin from "./pages/signin/Signin";
import Story from "./pages/blog/Story";
import BlogContent from "./pages/blogContent/BlogContent";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/story" element={<Story />} />
      <Route path="/blog-info" element={<BlogContent />} />
    </Routes>
  );
}

export default App;
