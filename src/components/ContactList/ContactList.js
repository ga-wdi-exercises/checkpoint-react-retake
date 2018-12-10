import React, { Component } from "react";
import Contact from "../Contact/Contact";

class ContactList extends Component {
  render() {
    let list = this.props.contacts.map(contact => {
      return (
        <Contact
          key={contact.name}
          name={contact.name}
          email={contact.email}
          profile_picture={contact.profile_picture}
        />
      );
    });
    return <div className="contact-list">{list}</div>;
  }
}

export default ContactList;
