import { useEffect, useState } from "react";
import axios from "axios";

const getUserData = (url) => {
  const [user, setUser] = useState({
    userID: "",
    fname: "",
    lname: "",
    email: "",
    about: "",
    profileImage: "",
    birthDay: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const userData = await axios.get(url);
      setUser({
        ...user,
        userID: userData.data.userData[0].id,
        fname: userData.data.userData[0].fname,
        lname: userData.data.userData[0].lname,
        email: userData.data.userData[0].email,
        about: userData.data.userData[0].about,
        profileImage: userData.data.userData[0].profileImage,
        birthDay: userData.data.userData[0].birthDay,
      });
    };
    getUser();
  }, []);

  return [user, setUser];
};

export default getUserData;
