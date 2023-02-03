import { Link } from "react-router-dom";
import sampleProfile from "../../assets/sample-profile.jpeg";
import "./featured-blog.scss";
const FeaturedBlog = () => {
  return (
    <div className="blog-container">
      <div className="profile-container">
        <div className="image-container">
          <img src={sampleProfile} alt="" />
        </div>
        <h4>James A. Jones</h4>
      </div>
      <Link to="/story" className="blog-title">
        Algorithms Unlocked: How They’re Shaping Our Everyday Lives
      </Link>
      <p className="blog-publish">publish - Jun 6, 2022</p>
    </div>
  );
};

export default FeaturedBlog;
