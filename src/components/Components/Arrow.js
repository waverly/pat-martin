import React from "react";
import "./../../css/Components/Arrow.css";

const Arrow = direction => {
  return <span className={"arrow arrow-" + direction.direction} />;
};

export default Arrow;
