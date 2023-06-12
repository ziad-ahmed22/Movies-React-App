import React from "react";
import img from "./head.png";
import "./headec.css";

const HeaderC = ({ title }) => {
  return (
    <div className="header text-white position-relative">
      <img src={img} alt="" />
      <h1 className="flex-center">{title}</h1>
    </div>
  );
};

export default HeaderC;
