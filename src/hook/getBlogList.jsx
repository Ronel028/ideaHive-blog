import { useEffect, useState } from "react";
import axios from "axios";

const getBlogData = (url) => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const userData = await axios.get(url);
      setBlogList(userData.data.blogData);
    };
    getUser();
  }, []);

  return [blogList, setBlogList];
};

export default getBlogData;
