import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TopScroll = () => {
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/Our-Work" &&
      location.state?.scrollTo
    ) {
      return; // Let /Our-Work handle scroll on its own
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
};

export default TopScroll;
