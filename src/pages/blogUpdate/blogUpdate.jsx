import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useResetScroll from "../../hook/useResetScroll";
import Navigation from "../../component/navigation/navigation";
import sampleProfile from "../../assets/sample-profile-2.jpeg";
import sampleBlogImage from "../../assets/chatGpt.jpeg";
import "./blogUpdate.scss";
const BlogUpdate = () => {
  useResetScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <header>
        <Navigation />
      </header>
      <main className="update-content-main">
        <div className="wrapper blog-content">
          <div className="blog-content-left">
            <div className="profile-container">
              <div className="profile">
                <div className="image-container">
                  <img src={sampleProfile} alt="" />
                </div>
                <div className="name-container">
                  <h5>John Doe</h5>
                  <p>Publish - Jan. 2, 2022</p>
                </div>
              </div>
              <div className="action">
                <Link to="/update" className="update-blog">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 21H5C3.89 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3H19C20.11 3 21 3.89 21 5V10.33C20.7 10.21 20.37 10.14 20.04 10.14C19.67 10.14 19.32 10.22 19 10.37V5H5V19H10.11L10 19.11V21ZM7 9H17V7H7V9ZM7 17H12.11L14 15.12V15H7V17ZM7 13H16.12L17 12.12V11H7V13ZM21.7 13.58L20.42 12.3C20.3172 12.1992 20.179 12.1428 20.035 12.1428C19.891 12.1428 19.7528 12.1992 19.65 12.3L18.65 13.3L20.7 15.35L21.7 14.35C21.8008 14.2472 21.8572 14.109 21.8572 13.965C21.8572 13.821 21.8008 13.6828 21.7 13.58ZM12 22H14.06L20.11 15.93L18.06 13.88L12 19.94V22Z"
                      fill="#0A4B88"
                    />
                  </svg>
                </Link>
                <button className="delete-blog">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 9H10.5V18H9V9ZM13.5 9H15V18H13.5V9Z"
                      fill="#C63434"
                    />
                    <path
                      d="M3 4.5V6H4.5V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6H21V4.5H3ZM6 21V6H18V21H6ZM9 1.5H15V3H9V1.5Z"
                      fill="#C63434"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="content">
              <h1>
                ChatGPT in an iOS Shortcut — Worlds Smartest HomeKit Voice
                Assistant
              </h1>
              <p>
                Ever since I tried ChatGPT and GPT-3, everything else feels
                painfully dumb and useless: Siri, Alexa, Google Home and all
                other “smart” assistants.
              </p>
              <div className="blog-image-container">
                <img src={sampleBlogImage} alt="" />
              </div>
              <p>
                I have a fully built HomeKit smart home with dozens of lights,
                thermostats, underfloor heating, ventilation unit, cameras and a
                lot more, so I thought it would be great if I could replace Siri
                with GPT-3.
              </p>
              <p>
                “Programming” the Home Assistant GPT-3, and especially ChatGPT
                are language models trained on conversational data which means
                they are extremely good at understanding and responding to human
                instructions. If you tried any of these chat bots, you know how
                easily you can ask questions and get responses in a wide range
                of formats. The complication is that when it comes to
                controlling a smart home you have very specific components to
                address and interact with. How can you solve this problem?
              </p>
            </div>
          </div>
          <div className="blog-content-right">
            <div className="sticky">
              <div className="image-container">
                <img src={sampleProfile} alt="" />
              </div>
              <h5>John Doe</h5>
              <p className="about">
                Senior Web Developer, Creative Technologist with over 12 years
                experience | JavaScript, HTML, CSS, Artificial Intelligence
              </p>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default BlogUpdate;
