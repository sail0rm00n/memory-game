import React from "react";
import "./Jumbo.css";

const Jumbo = props => (
  <div className="jumbotron jumbotron-fluid mt-5">
    <div className='overlay'>
      <div className="container text-center">
        <h1>Memory Game</h1>
        <p>Click the images without repeating!</p>
      </div>
    </div>
  </div>
);

export default Jumbo;