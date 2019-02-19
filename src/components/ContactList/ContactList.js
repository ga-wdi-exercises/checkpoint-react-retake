import React, { Component } from 'react';


class ContactList extends Component {
    render() {
     let contactList = this.props.contacts.map((contact) => {
         return (
            <Contact  key={ contact } />
         )
     })
        return (
            <div className="contact-list">
                {contactList}
            </div>
        );
    }
}

export default ContactList;