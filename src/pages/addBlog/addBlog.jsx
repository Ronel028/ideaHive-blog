import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useResetScroll from "../../hook/useResetScroll";
import Navigation from "../../component/navigation/navigation";
import "./addBlog.scss";

const AddBlog = () => {
  // hooks
  useResetScroll(); // reset the window location set to top when this page is active
  const navigate = useNavigate();

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
          <Form className="form">
            <div className="input-container">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label" htmlFor="blog-title">
                  Blog title
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  id="blog-title"
                  name="blog-title"
                  placeholder="Blog title..."
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label" htmlFor="featured-image">
                  Featured image
                </Form.Label>
                <Form.Control
                  type="file"
                  id="featured-image"
                  className="input"
                  name="featured-image"
                  placeholder="featured image..."
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="label" htmlFor="category">
                Category
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="input"
                id="category"
                name="category"
              >
                <option disabled>Select Category</option>
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="label" htmlFor="summary">
                Excerpt <span>(short summary of your blog post)</span>
              </Form.Label>
              <Form.Control
                type="text"
                id="summary"
                className="input"
                name="summary"
                placeholder="Short summary..."
              />
            </Form.Group>
            <div className="post-btn-container">
              <button type="submit" className="cancel-btn">
                Cancel
              </button>
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
