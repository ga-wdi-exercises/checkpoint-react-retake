import React, { Component } from 'react';

class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>NewContact</h1>
                <form> 
                  <div> <input type="text" name="name" placeholder="name"/> </div> 
                  <div> <input type="text" name="email" placeholder="email"/> </div> 
                  <div> <input type="url" name="profile_picture" placeholder="profile_picture"/> </div> 
                   
                </form>
            </div>
        );
    }
}

export default NewContact;