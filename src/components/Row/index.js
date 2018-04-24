import React from "react";
// import "./Row.css";

const Row = props => (
  <div className="row justify-content-center align-items-center">
    {props.children}
  </div>
);

export default Row;