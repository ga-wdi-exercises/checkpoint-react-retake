import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ContactList extends Component {

  render() {
    let list = this.props.contacts.map(contact => {
      return (
        <div>
          <Link to={'/' + contact.name} key={contact.name}>
          <ul>
            <li>{contact.name}</li>
          </ul>
          </Link>
        </div>
      );
    })
    return (
      <div className='contact-list'>
        {list}
      </div>
    )
  }
}

export default ContactList;