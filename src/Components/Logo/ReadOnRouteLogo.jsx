import React from "react";
import logo from "../../assets/Screenshot_2026-01-10_114009-removebg-preview.png";

const ReadOnRouteLogo = ({ width = 60, height = "auto" }) => {
  return (
    <img
      src={logo}
      alt="Read On Route Logo"
      style={{ width, height }}
    />
  );
};

export default ReadOnRouteLogo;
