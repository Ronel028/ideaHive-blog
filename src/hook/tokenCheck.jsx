import { useEffect } from "react";
import axios from "axios";
import cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const useTokenCheck = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const getSession = async () => {
      const checkSession = await axios.get(
        "https://api-ideahive.vercel.app/user/verified",
        {
          headers: {
            Authorization: `Bearer ${cookies.get("access_token")}`,
          },
        }
      );
      if (!checkSession.data.isLogin) {
        navigate("/");
      }
    };
    getSession();
  }, [navigate]);
};
