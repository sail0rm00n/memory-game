import React from 'react';
import "./Navbar.css";

const Navbar = props => (
  <nav
  className="navbar navbar-dark bg-dark fixed-top mb-2 justify-content-around text-light">
  <a className="navbar-brand" href="/">
    <h2>💖</h2>
  </a>

  <h2>{props.info}</h2>

  <h3>Score: {props.score} | Top Score: {props.topScore}</h3>

</nav>
);

export default Navbar;