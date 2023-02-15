import Navigation from "../../component/navigation/navigation";
import profileALt from "../../assets/profile-alt.jpeg";
import "./updateProfile.scss";

const UpdateProfile = () => {
  return (
    <>
      <Navigation />
      <main className="main update-user-main">
        <div className="wrapper update-user-container">
          <div className="title">
            <h2>Account settings</h2>
          </div>
          <div className="user-information">
            <h3>User information</h3>
            <p>Here you can edit public information about yourself.</p>
          </div>
          {/* inputs */}
          <form className="update-fields">
            <div className="input-container">
              <div className="update-image-container">
                <div className="image-container">
                  <img src={profileALt} alt="" />
                </div>
                <label htmlFor="profile-pic" className="profile-pic">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.98145 10.3308V12.5428H4.19349L10.7175 6.01878L8.50549 3.80673L1.98145 10.3308ZM12.4282 4.30813C12.4829 4.25356 12.5262 4.18874 12.5558 4.11738C12.5854 4.04602 12.6007 3.96952 12.6007 3.89227C12.6007 3.81501 12.5854 3.73852 12.5558 3.66716C12.5262 3.5958 12.4829 3.53098 12.4282 3.4764L11.0479 2.09609C10.9933 2.04141 10.9285 1.99802 10.8571 1.96842C10.7858 1.93882 10.7093 1.92358 10.632 1.92358C10.5547 1.92358 10.4782 1.93882 10.4069 1.96842C10.3355 1.99802 10.2707 2.04141 10.2161 2.09609L9.13666 3.17557L11.3487 5.38761L12.4282 4.30813Z"
                      fill="#F1F1F1"
                    />
                  </svg>
                  <input type="file" name="profile" id="profile-pic" />
                </label>
              </div>
              <div className="inputs">
                <div className="full-name">
                  <label>Full name</label>
                  <div className="full-name-input">
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      placeholder="First name"
                    />
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="email-dob">
                  <div className="email-address">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="dob">
                    <label htmlFor="dob">Date of birth</label>
                    <input type="date" name="dob" id="dob" />
                  </div>
                </div>
                <div className="about">
                  <label htmlFor="about">About</label>
                  <textarea
                    name="about"
                    id="about"
                    rows="5"
                    placeholder="Tell me something a little bit about yourself"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="profile-btn-container">
              <button className="change-password-btn">Change password</button>
              <button type="submit" className="save-profile-btn">
                Save profile
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default UpdateProfile;
