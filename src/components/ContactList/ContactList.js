import Contact from "../Contact/Contact"
import React, { Component } from "react";

class ContactList extends Component {
    render() {
        let list = this.props.contacts.map((contact) => {
            return (<Contact
                name={contact.name}
                email={contact.email}
                profile_picture={contact.profile_picture}
            />)
        })
        return(
            <div className="contact-list">
            {list}
            </div>
        )
    }
}

export default ContactList;