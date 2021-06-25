import React from "react";

const Square = ({ active }) => {
  return <div className={active ? "square active" : "square "}></div>;
};

export default Square;
