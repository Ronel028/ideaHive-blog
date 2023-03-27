import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useTokenCheck = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const getSession = async () => {
      const checkSession = await axios.get(
        "https://api-ideahive.onrender.com/user/verified"
      );
      if (!checkSession.data.isLogin) {
        navigate("/");
      }
    };
    getSession();
  }, [navigate]);
};
