import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // changing the showTopBtn state whenever a scroll event happens
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  // fucntion to help scroll to top smoothly
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <KeyboardArrowUpIcon   sx={{ fontSize: 50}} className="icon-position icon-style" onClick={goToTop}/>
      )}
    </div>
  );
};

export default ScrollToTop;
