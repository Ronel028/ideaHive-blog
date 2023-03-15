import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
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
import "./updateBlog.scss";

const blogPublishMsg = (msg) =>
  toast(msg, {
    icon: "👏",
  });

const UpdateBlog = () => {
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
  const { blogList, setBlogList, setIsBlogUpdate } = useContext(userContext);
  const searchParams = useLocation().search;
  // hooks

  // use this function to validate this page if login or not
  useTokenCheck();
  // use this function to validate this page if login or not

  // get blog id from url
  const blogId = new URLSearchParams(searchParams).get("blogId");
  // get blog id from url

  //get blog by id
  useEffect(() => {
    const getBlogById = async () => {
      const getBlog = await axios.get(`/blog/blog-content?blogID=${blogId}`);
      setBlogInput({
        ...blogInput,
        blogTitle: getBlog.data.blog[0].blogTitle,
        Image: getBlog.data.blog[0].featuredImage,
        category: getBlog.data.blog[0].category,
        summary: getBlog.data.blog[0].summary,
      });
      setMarkdown(getBlog.data.blog[0].blogContent);
    };
    getBlogById();
  }, []);
  //get blog by id

  // toolbars for quill markdown editor
  const modules = {
    toolbar: [
      //[{ header: [false] }], //header
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

  // save updated blog post
  const saveUpdateBlogPost = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(blogInput).forEach(([name, value]) => {
        formData.append(name, value);
      });
      formData.append("blogContent", markdown);
      setLoading(true);
      const updateBlog = await axios.post(
        `/blog/update-blog?blogId=${blogId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (updateBlog.data.msg === "success") {
        setBlogList(updateBlog.data.blogList);
        setIsBlogUpdate(true);
        navigate(`/manage-blog?blogId=${blogId}`);
      } else {
        throw "Error updating you blog. Please try again";
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  // save updated blog post

  //loading active while uploading your blog
  const loadingActive = loading ? (
    <LoadingLG loadingWord="Your blog post is updating, this might take a moment..." />
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
      <main className="main update-blog-main">
        <div className="wrapper update-blog-container">
          <div className="title title-page">
            <h2>Update blog</h2>
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
            <h3>Update your blog</h3>
            <p>Here you can update your own blog.</p>
          </div>
          {/* form */}
          <Form className="form" onSubmit={saveUpdateBlogPost}>
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
                Update
              </button>
            </div>
          </Form>
          {/* form */}
        </div>
      </main>
    </motion.div>
  );
};

export default UpdateBlog;
