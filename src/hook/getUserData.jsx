import { useEffect, useState } from "react";
import axios from "axios";

const getUserData = (url) => {
  const [user, setUser] = useState({
    isLogin: false,
    userID: "",
    fname: "",
    lname: "",
    email: "",
    about: "",
    Image: "",
    birthDay: "",
  });
  const [fetchUserData, setFetchUserData] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        setFetchUserData(true);
        const userData = await axios.get(url, { withCredentials: true });
        if (
          userData.data.isLogin &&
          userData.data.userData &&
          userData.data.userData.length > 0
        ) {
          setUser({
            ...user,
            isLogin: userData.data.isLogin,
            userID: userData.data.userData[0].id,
            fname: userData.data.userData[0].fname,
            lname: userData.data.userData[0].lname,
            email: userData.data.userData[0].email,
            about: userData.data.userData[0].about,
            Image: userData.data.userData[0].profileImage,
            birthDay: userData.data.userData[0].birthDay,
          });
        } else {
          throw new Error("Invalid");
        }
        setFetchUserData(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, []);

  return [user, setUser, fetchUserData];
};

export default getUserData;
