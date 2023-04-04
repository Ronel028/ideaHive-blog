import { useState, useEffect } from "react";
import axios from "axios";

const userAuth = (url) => {
  const [userLogin, setUserLogin] = useState({
    isLogin: false,
    fname: "",
    lname: "",
    email: "",
    profileImage: "",
  });

  useEffect(() => {
    const getSession = async () => {
      const checkSession = await axios.get(url, { withCredentials: true });
      if (checkSession.data.isLogin) {
        setUserLogin({
          ...userLogin,
          isLogin: checkSession.data.isLogin,
          fname: checkSession.data.user[0].fname,
          lname: checkSession.data.user[0].lname,
          profileImage: checkSession.data.user[0].profileImage,
        });
      }
    };
    getSession();
  }, []);

  return [userLogin];
};

export default userAuth;
