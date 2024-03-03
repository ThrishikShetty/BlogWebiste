import React from "react";
import logo from "../assets/logo.jpeg";
function Logo({ width = "100px" }) {
  return (
    <div>
      <img
        src={logo}
        alt=""
        className="w-11 inline-block items-center rounded-xl"
      />
    </div>
  );
}

export default Logo;
