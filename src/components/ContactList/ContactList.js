import React, { Component } from 'react';
import Contact from '../Contact/Contact.js'

class ContactList extends Component {
  render() {
    console.log('hello')
    let contactList = this.props.contacts.map( contact => {
      return <Contact {...contact} key={contact.name}/>
    })
    console.log(this.props)
    return (
      <div className='contact-list'>
        {contactList}
      </div>
    );
  }
}

export default ContactList;