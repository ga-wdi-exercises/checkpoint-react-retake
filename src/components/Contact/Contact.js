import React, { Component } from 'react';

class Contact extends Component {

  render() {
    let singleContact = this.props.contacts.filter(contact => contact.name === this.props.match.params.name)[0]
    return (
      <div className ='contact'>
        <h3>{singleContact.name}</h3>
        <ul>
          <li>Name: {singleContact.name}</li>
          <li>Email: {singleContact.email}</li>
          <li>Profile Picture: {singleContact.profile_picture}</li>
          <li>Superpower: {singleContact.super_power}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;