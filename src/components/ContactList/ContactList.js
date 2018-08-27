import React, {Component} from 'react'
import Contact from '../Contact/Contact'

class ContactList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: this.props.datalist
        }
    }
    render() {
        let contact = this.state.contact
        console.log(contact)
        let showContacts = contact.map((obj, i) => {
            return (<div key={i}>
                <Contact data={obj} />
            </div>)
        })
        console.log(showContacts)
        return(
        <div className="contact-list">
            {showContacts}
        </div>
    )
    }
}
export default ContactList