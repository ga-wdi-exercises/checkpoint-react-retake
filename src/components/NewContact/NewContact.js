import React, { Component } from 'react';

class NewContact extends Component {
    render() {
        return (
            <div>
               <h1>New Contact</h1> 
               <form>
                   <input type='email' name='email' value='email'>email</input>
                   <input type='name' name='name' value='name'>name</input>
                   <input type='image' name='image' value='image'>image</input>
                   <input type='text' name='profile_picture' value='super power'>super power</input>
                   <input type='image' name='super_power' value='image'>image</input>
               </form>
            </div>
        );
    }
}

export default NewContact;