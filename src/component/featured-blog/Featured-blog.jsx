import { Link } from "react-router-dom";
import moment from "moment";
import altProfilePic from "../../assets/profile-alt.jpeg";
import "./featured-blog.scss";
const FeaturedBlog = (props) => {
  return (
    <div className="blog-container">
      <div className="profile-container">
        <div className="image-container">
          <img
            src={props.profilePic === "N/A" ? altProfilePic : props.profilePic}
            alt={props.bloggerName}
          />
        </div>
        <h4>{props.bloggerName}</h4>
      </div>
      <Link to={`/blog-content?blogID=${props.userID}`} className="blog-title">
        {props.blogTitle}
      </Link>
      <p className="blog-publish">
        publish - {moment(props.blogPublish).format("LL")}
      </p>
    </div>
  );
};

export default FeaturedBlog;
