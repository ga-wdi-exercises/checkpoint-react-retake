import React, { Component } from 'react';
import Contact from '../Contact/Contact'

class ContactList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: this.props.contacts
        }
    }
    render() {
        let list = this.state.contacts.map((contact, index) => {
            return (
                <Contact key = {index} />

            )
        })
    
        return (
            <div className='contact-list'>
                {list}
            </div>
        );
    }
}

export default ContactList;