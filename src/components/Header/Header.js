import React, { Component } from "react";
import {Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          Justice League App
          <h1 />
        </header>
        <nav>
          <Link to={"/new-contact"}></Link>
          <Link to={"/"}></Link>
        </nav>
      </div>
    );
  }
}

export default Header;
