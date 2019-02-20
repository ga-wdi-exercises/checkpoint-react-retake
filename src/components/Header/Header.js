import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="nav">
            <Link to="/" className="nav-link">
              <h1>homepage</h1>
            </Link>
            <Link to="/new-contact" className="nav-link">
              <h1>Create</h1>
            </Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
