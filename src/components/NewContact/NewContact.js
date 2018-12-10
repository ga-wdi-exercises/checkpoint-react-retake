import React, { Component } from "react";

class NewContact extends Component {
    render() {
        return(
            <div>
                <h1>New Contact</h1>
                <form>
                    <input name="name" type="text-box"/>
                    <input name="email" type="text-box"/>
                    <input name="profile_picture" type="text-box"/>
                    <input name="super_power" type="text-box"/>
                </form>
            </div>
        )
    }
}

export default NewContact;