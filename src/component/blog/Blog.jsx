import { Link } from "react-router-dom";
import moment from "moment";
import altImage from "../../assets/imgNotAvailable.jpeg";
import altProfilePic from "../../assets/profile-alt.jpeg";
import "./blog.scss";
const Blog = (props) => {
  return (
    <div className="blog-info-container">
      <div className="image-container">
        <img
          src={props.featuredImage === "N/A" ? altImage : props.featuredImage}
          alt=""
        />
      </div>
      <div className="blog-description">
        <div className="blog-profile-container">
          <div className="blog-image-container">
            <img
              src={
                props.profileImage === "N/A"
                  ? altProfilePic
                  : props.profileImage
              }
              alt={props.bloggerName}
            />
          </div>
          <h3>{props.bloggerName}</h3>
        </div>
        <Link to={`/${props.contentLink}`} className="blog-info">
          <h2 className="blog-title">{props.blogTitle}</h2>
          <p className="blog-desc">{props.blogSummary}</p>
        </Link>
        <p className="date-publish">
          Publish - {moment(props.datePosted).format("LL")}
        </p>
      </div>
    </div>
  );
};

export default Blog;
