import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useResetScroll from "../../hook/useResetScroll";
import Navigation from "../../component/navigation/navigation";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./addBlog.scss";

const AddBlog = () => {
  // hooks
  useResetScroll(); // reset the window location set to top when this page is active
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState({
    blogTitle: "",
    featuredImage: "",
    category: "",
    summary: "",
    blogContent: "",
  });
  // hooks

  // use this function to validate this page if login or not
  useEffect(() => {
    const getSession = async () => {
      const checkSession = await axios.get("/user/verified");
      if (!checkSession.data.isLogin) {
        navigate("/");
      }
    };
    getSession();
  }, []);
  // use this function to validate this page if login or not

  // toolbars for quill markdown editor
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }], //header
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
      [{ align: [] }],
      [("link", "image")], // link and image
      ["clean"], // remove formatting button
    ],
  };
  // toolbars for quill markdown editor

  // function for getting value from markdown editor and other input
  const editorValue = (e) => {
    setInputVal({
      ...inputVal,
      blogContent: e,
    });
  };
  const getInputValue = (e) => {
    setInputVal({
      ...inputVal,
      [e.target.name]:
        e.target.name === "featuredImage" ? e.target.files[0] : e.target.value,
    });
  };
  // function for getting value from markdown editor and other input

  // save new blog post
  const saveBlogPost = (e) => {
    e.preventDefault();
    console.log(inputVal);
  };
  // save new blog post

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <header>
        <Navigation />
      </header>
      <main className="main add-blog-main">
        <div className="wrapper add-blog-container">
          <div className="title title-page">
            <h2>Post blog</h2>
          </div>
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
                  onChange={getInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="featuredImage">
                <Form.Label className="label">Featured image</Form.Label>
                <Form.Control
                  type="file"
                  className="input"
                  name="featuredImage"
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
                onChange={getInputValue}
              >
                <option value="">Select Category</option>
                <option value="Programming">Programming</option>
                <option value="Technology">Technology</option>
                <option value="Space">Space</option>
                <option value="Self Improvement">Self Improvement</option>
                <option value="Daily Life">Daily Life</option>
                <option value="Artificial Inteligence">
                  Artificial Inteligence
                </option>
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
                onChange={getInputValue}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label">Blog content</Form.Label>
              <ReactQuill
                modules={modules}
                theme="snow"
                value={inputVal.blogContent}
                onChange={editorValue}
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
