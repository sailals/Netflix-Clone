import React, { useState } from "react";

function Navbar() {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className="nav-wrapper">
        <div className="container">
          <div className="nav">
            <a href="#" class="logo">
              <i class="bx bx-movie-play bx-tada main-color"></i>NetFl
              <span class="main-color">i</span>x
            </a>
            <ul
              className={isActive ? "nav-menu active " : "nav-menu"}
              id="nav-menu"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Genre</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Series</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#" className="btn btn-hover">
                  <span>Sign In</span>
                </a>
              </li>
            </ul>
            <div
              onClick={handleClick}
              className={isActive ? "hamburger-menu active" : "hamburger-menu"}
            >
              <div className="hamburger"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
