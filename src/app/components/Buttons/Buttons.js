import React from "react";

export const Buttons = ({ activeButton, onButtonClick }) => {
  return (
    <div className="buttons">
      <button
        className={`sign-up-btn ${activeButton === "sign-up" ? "active" : ""}`}
        onClick={() => onButtonClick("sign-up")}
      >
        Sign Up
      </button>
      <button
        className={`log-in-btn ${activeButton === "log-in" ? "active" : ""}`}
        onClick={() => onButtonClick("log-in")}
      >
        Log In
      </button>
    </div>
  );
};
