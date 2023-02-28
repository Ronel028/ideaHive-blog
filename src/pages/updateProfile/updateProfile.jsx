import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { userContext } from "../../context/userContext";
import getUserData from "../../hook/getUserData";
import Navigation from "../../component/navigation/navigation";
import ChangePassword from "../../component/changePassword/changePassword";
import AlertMessage from "../../component/alert/alert";
import LoadingLG from "../../component/loadingLG/loading";
import profileALt from "../../assets/profile-alt.jpeg";
import "./updateProfile.scss";

const UpdateProfile = () => {
  // hooks
  const { user, setUser } = useContext(userContext); //call the context api
  const navigate = useNavigate();
  const [inputVal, setInputVal] = getUserData("/user/info"); //getting user data to display in the ui to update
  const [imagePreviewer, setImagePreviewer] = useState(""); //storage for image to preview
  const [loading, setLoading] = useState(false);
  const [tempImage, setTempImage] = useState(null); //image storage for URL.createObjectURL()
  // hooks

  // use this to releases an existing object URL which was previously created by calling URL.createObjectURL()
  useEffect(() => {
    return () => {
      if (tempImage) {
        URL.revokeObjectURL(tempImage);
      }
    };
  }, [inputVal.profileImage, tempImage]);
  // use this to releases an existing object URL which was previously created by calling URL.createObjectURL()

  // getting user input
  const userInput = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };
  // getting user input

  // handle image value and image previewer
  const handleImage = (e) => {
    const image = e.target.files[0];
    const reader = new FileReader();

    setInputVal({
      ...inputVal,
      profileImage: e.target.files[0],
    });
    setTempImage(URL.createObjectURL(e.target.files[0]));

    reader.addEventListener("load", () => {
      setImagePreviewer(reader.result);
    });
    reader.readAsDataURL(image);
  };
  // handle image value and image previewer

  // function for updating profile
  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(inputVal).forEach(([name, value]) => {
        formData.append(name, value);
      });

      setLoading(true);
      const updateUser = await axios.post("/user/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (updateUser.data.msg) {
        setLoading(false);
        console.log(inputVal);
        setUser({
          ...user,
          fname: inputVal.fname,
          lname: inputVal.lname,
          email: inputVal.email,
          about: inputVal.about,
          profileImage: tempImage === null ? user.profileImage : tempImage,
          birthDay: inputVal.birthDay,
        });
        navigate("/account-settings");
      } else {
        throw updateUser.data.error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  // function for updating profile

  // show modal
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);
  // show modal

  // password change message
  const [alertPassChange, setAlertPassChange] = useState(false);
  const passwordMsgChange = alertPassChange ? (
    <AlertMessage
      variant="success"
      message="Password change success"
      setAlertPassChange={setAlertPassChange}
    />
  ) : (
    ""
  );
  // password change message

  // main loading active
  const loadingActive = loading ? <LoadingLG /> : "";
  // main loading active

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      {/* loading animation */}
      {loadingActive}
      {/* loading animation */}

      <Navigation />

      {/* change password */}
      <ChangePassword
        showModal={showModal}
        closeModal={closeModal}
        show={show}
        setShowModal={setShow}
        setAlertPassChange={setAlertPassChange}
      />
      {/* change password */}

      <main className="main update-user-main">
        <div className="wrapper update-user-container">
          <div className="title">
            <h2>Account settings</h2>
          </div>

          {/* display if password change success */}
          {passwordMsgChange}
          {/* display if password change success */}

          <div className="user-information">
            <h3>User information</h3>
            <p>Here you can edit public information about yourself.</p>
          </div>
          {/* inputs */}
          <form
            method="POST"
            className="update-fields"
            onSubmit={updateProfile}
          >
            <div className="input-container">
              <div className="update-image-container">
                <div className="image-container">
                  <img
                    src={
                      imagePreviewer === ""
                        ? inputVal.profileImage === null
                          ? profileALt
                          : inputVal.profileImage
                        : imagePreviewer
                    }
                    alt=""
                  />
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
                  <input
                    type="file"
                    name="profileImage"
                    id="profile-pic"
                    onChange={handleImage}
                  />
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
                      value={inputVal.fname}
                      onChange={userInput}
                    />
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      placeholder="Last name"
                      value={inputVal.lname}
                      onChange={userInput}
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
                      value={inputVal.email}
                      onChange={userInput}
                    />
                  </div>
                  <div className="birthDay">
                    <label htmlFor="birthDay">Date of birth</label>
                    <input
                      type="date"
                      name="birthDay"
                      id="birthDay"
                      defaultValue={
                        inputVal.birthDay === null ? "" : inputVal.birthDay
                      }
                      onChange={userInput}
                    />
                  </div>
                </div>
                <div className="about">
                  <label htmlFor="about">About</label>
                  <textarea
                    name="about"
                    id="about"
                    rows="5"
                    placeholder="Tell me something a little bit about yourself"
                    value={inputVal.about === null ? "" : inputVal.about}
                    onChange={userInput}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="profile-btn-container">
              <button
                className="change-password-btn"
                type="button"
                onClick={showModal}
              >
                Change password
              </button>
              <button type="submit" className="save-profile-btn">
                Save profile
              </button>
            </div>
          </form>
        </div>
      </main>
    </motion.div>
  );
};

export default UpdateProfile;
