import React, { useState, useEffect, useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { context } from "../store/Apps";

const Left = () => {
  const { istrue, setistrue } = useContext(context);
  const [showHamburger, setShowHamburger] = useState(false);

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handle = () => {
    setistrue((prev) => !prev);
  };

  return (
    <div className="flex items-center">
      {/* Hamburger Menu (Always Rendered) */}
      <RxHamburgerMenu
        onClick={handle}
        className={`text-xl cursor-pointer hidden sm:block transition-opacity duration-300 ${
          showHamburger ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      <div className="ml-5 font-bold text-lg">LOGO</div>
    </div>
  );
};

export default Left;
