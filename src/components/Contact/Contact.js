import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src="contact.profile_picture" />
        <h2 src="contact.name" />
        <h3 src="contact.email" />
        <h4 src="contact.super_power" />
      </div>
    );
  }
}
export default Contact;
