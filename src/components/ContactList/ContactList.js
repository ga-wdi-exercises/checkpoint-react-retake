import React, { Component } from 'react'
import Contact from '../Contact/Contact'

class ContactList extends Component {
  render () {
    let contactList = this.props.contacts.map(contact => {
      return (
        <div className='contact-list' key={contact.name}>
          <Contact />
        </div>
      )
    })
    return (
      {contactList}
    )
  }
}

export default ContactList
