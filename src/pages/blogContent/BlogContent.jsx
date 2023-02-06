import Navigation from "../../component/navigation/navigation";
import sampleProfile from "../../assets/sample-profile-2.jpeg";
import sampleBlogImage from "../../assets/chatGpt.jpeg";
import "./blogContent.scss";
const BlogContent = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="blog-content-main">
        <div className="wrapper blog-content">
          <div className="blog-content-left">
            <div className="profile-container">
              <div className="image-container">
                <img src={sampleProfile} alt="" />
              </div>
              <div className="name-container">
                <h5>John Doe</h5>
                <p>Publish - Jan. 2, 2022</p>
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
    </>
  );
};

export default BlogContent;
