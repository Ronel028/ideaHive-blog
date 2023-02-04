import { Link } from "react-router-dom";
import "./featured-blog.scss";
const FeaturedBlog = (props) => {
  return (
    <div className="blog-container">
      <div className="profile-container">
        <div className="image-container">
          <img src={props.profilePic} alt="" />
        </div>
        <h4>{props.bloggerName}</h4>
      </div>
      <Link to="/story" className="blog-title">
        {props.blogTitle}
      </Link>
      <p className="blog-publish">publish - Jun 6, 2022</p>
    </div>
  );
};

export default FeaturedBlog;
