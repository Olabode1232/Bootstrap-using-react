import React, { Component } from "react";

function Nav() {
  return (
    <div>
      <nav className="navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a href="#" className="navbar-brand">
            {" "}
            Frontend Bootcamp
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Learning
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Questions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Instructors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
