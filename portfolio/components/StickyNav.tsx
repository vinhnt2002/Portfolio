import React, { useState, useEffect } from "react";

interface StickyNavProps {
  children: React.ReactNode;
}

const StickyNav: React.FC<StickyNavProps> = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);
  const mobileSticky = 480; 

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > mobileSticky);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`flex justify-center items-center  gap-8 cursor-pointer text-sm font-medium ${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-white shadow transition-transform duration-300 z-10"
            : "relative transform -translate-y-11 z-0 transition-transform duration-300"
        }`}
      >
        {children}
      </div>
      {isSticky && <div className="h-[3.5rem]"></div>}
    </>
  );
};

export default StickyNav;
