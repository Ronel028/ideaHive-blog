import chatGpt from "../../assets/chatGpt.jpeg";
import sampleImage2 from "../../assets/sample-profile-2.jpeg";
import "./blog.scss";
const Blog = () => {
  return (
    <div className="blog-info-container">
      <div className="image-container">
        <img src={chatGpt} alt="" />
      </div>
      <div className="blog-description">
        <div className="blog-profile-container">
          <div className="blog-image-container">
            <img src={sampleImage2} alt="" />
          </div>
          <h3>John Doe</h3>
        </div>
        <h2 className="blog-title">
          ChatGPT in an iOS Shortcut — Worlds Smartest HomeKit Voice Assistant
        </h2>
        <p className="blog-desc">
          Ever since I tried ChatGPT and GPT-3, everything else feels painfully
          dumb and useless: Siri, Alexa, Google Home and all.
        </p>
        <p className="date-publish">Dec. 2, 2023</p>
      </div>
    </div>
  );
};

export default Blog;
