import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import svg from "./404.svg";

const Error = ({ msg, btn, height }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ height: `${height}vh` }}
      className="bg-dark-blue flex-center flex-column"
    >
      <img src={svg} alt="error img" className="w-75 h-75" />
      <h2 className="text-white fw-bold mt-5 mb-4">{msg}</h2>
      {btn === "true" && (
        <Button
          className="bg-red px-4 py-2"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
      )}
    </div>
  );
};

export default Error;
