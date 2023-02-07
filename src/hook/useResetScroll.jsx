import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useResetScroll = () => {
  // reset the window location set to top when this page is active
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  // reset the window location set to top when this page is active
};

export default useResetScroll;
