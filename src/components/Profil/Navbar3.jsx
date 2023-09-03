import React from "react";
import { Link } from "react-router-dom";

function Navbar3() {
  return (
    <div className="navbar3">
    <nav>
      <ul>
          <li> <Link to="/">All</Link></li>
          <li><Link to="/Walls">Walls</Link></li>
          <li><Link to="/Gallery">Gallery</Link></li>
          <li><Link to="/Video">Video</Link></li>
          <li><Link to="/Music">Music</Link></li>
      </ul>
    </nav>
  </div>
  );
}

export default Navbar3;
