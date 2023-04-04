import { useEffect, useState, useContext } from "react";
import axios from "axios";
import cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import Form from "react-bootstrap/Form";
import { userContext } from "../../context/userContext";
import useResetScroll from "../../hook/useResetScroll";
import { useTokenCheck } from "../../hook/tokenCheck";
import Navigation from "../../component/navigation/navigation";
import LoadingLG from "../../component/loadingLG/loading";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./addBlog.scss";

const blogPublishMsg = (msg) =>
  toast(msg, {
    icon: "👏",
  });

const AddBlog = () => {
  // hooks
  useResetScroll(); // reset the window location set to top when this page is active
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [blogInput, setBlogInput] = useState({
    blogTitle: "",
    Image: "N/A",
    category: "N/A",
    summary: "",
  });
  const [markdown, setMarkdown] = useState(""); //state for store and getting markdown value
  const { blogList, setBlogList } = useContext(userContext);
  // hooks

  // use this function to validate this page if login or not
  useTokenCheck();
  // use this function to validate this page if login or not

  // toolbars for quill markdown editor
  const modules = {
    toolbar: [
      [{ header: [2, 3, 4, 5, 6, false] }], //header
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"], //toggle button
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      ["link", "image"], // link and image
      ["clean"], // remove formatting button
    ],
  };
  // toolbars for quill markdown editor

  const getInputValue = (e) => {
    setBlogInput({
      ...blogInput,
      [e.target.name]:
        e.target.name === "Image" ? e.target.files[0] : e.target.value,
    });
  };
  // function for getting value from markdown editor and other input

  // save new blog post
  const saveBlogPost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(blogInput).forEach(([name, value]) => {
      formData.append(name, value);
    });
    formData.append("blogContent", markdown);
    setLoading(true);
    const insertNewBlog = await axios.post(
      "https://idea-h-ive-blog.vercel.app/blog/add-blog",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${cookies.get("access_token")}`,
        },
      }
    );
    if (insertNewBlog.data.msg === "success") {
      console.log(insertNewBlog.data.blogList);
      setLoading(false);
      blogPublishMsg("Great job! Your blog has been published");
      setBlogInput({
        ...blogInput,
        blogTitle: "",
        Image: "N/A",
        category: "N/A",
        summary: "",
      });
      setMarkdown("");
      setBlogList(insertNewBlog.data.blogList);
    } else {
      alert(console.log(insertNewBlog.data.msg));
    }
  };
  // save new blog post

  //loading active while uploading your blog
  const loadingActive = loading ? (
    <LoadingLG loadingWord="Your blog post is being published, this might take a moment..." />
  ) : (
    ""
  );
  //loading active while uploading your blog */

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      {/* loading active while uploading your blog */}
      {loadingActive}
      {/* loading active while uploading your blog */}
      <header>
        <Navigation />
      </header>
      <main className="main add-blog-main">
        <div className="wrapper add-blog-container">
          <div className="title title-page">
            <h2>Post blog</h2>
          </div>
          {/* publish blog message */}
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 4000,
            }}
          />
          {/* publish blog message */}
          <div className="sub-heading">
            <h3>Create new blog</h3>
            <p>Here you can post your own blog.</p>
          </div>
          {/* form */}
          <Form className="form" onSubmit={saveBlogPost}>
            <div className="input-container">
              <Form.Group className="mb-3" controlId="blogTitle">
                <Form.Label className="label">Blog title</Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  name="blogTitle"
                  placeholder="Blog title..."
                  value={blogInput.blogTitle}
                  onChange={getInputValue}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="featuredImage">
                <Form.Label className="label">Featured image</Form.Label>
                <Form.Control
                  type="file"
                  className="input"
                  name="Image"
                  placeholder="featured image..."
                  onChange={getInputValue}
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="category">
              <Form.Label className="label">Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="input"
                name="category"
                value={blogInput.category}
                onChange={getInputValue}
              >
                <option value="">Select Category</option>
                <option value="programming">Programming</option>
                <option value="technology">Technology</option>
                <option value="space">Space</option>
                <option value="self-improvement">Self Improvement</option>
                <option value="daily-life">Daily Life</option>
                <option value="artificial-inteligence">
                  Artificial Inteligence
                </option>
                <option value="anime">Anime</option>
                <option value="movies">Movies</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="summary">
              <Form.Label className="label">
                Excerpt <span>(short summary of your blog post)</span>
              </Form.Label>
              <Form.Control
                type="text"
                className="input"
                name="summary"
                placeholder="Short summary..."
                value={blogInput.summary}
                onChange={getInputValue}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label">Blog content</Form.Label>
              <ReactQuill
                modules={modules}
                theme="snow"
                value={markdown}
                onChange={setMarkdown}
              />
            </Form.Group>
            <div className="post-btn-container">
              <Link to="/" className="cancel-btn">
                Cancel
              </Link>
              <button type="submit" className="post-btn">
                Post
              </button>
            </div>
          </Form>
          {/* form */}
        </div>
      </main>
    </motion.div>
  );
};

export default AddBlog;
