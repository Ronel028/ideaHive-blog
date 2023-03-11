import { useEffect, useState } from "react";
import axios from "axios";

const getBlogData = (url) => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const userData = await axios.get(url);
      if (userData.data.msg === "success") {
        setBlogList(userData.data.blogData);
      } else {
        alert(userData.data.msg);
      }
    };
    getUser();
  }, []);

  return [blogList, setBlogList];
};

export default getBlogData;
