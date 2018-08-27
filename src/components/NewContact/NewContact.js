import React, { Component } from 'react'

class NewContact extends Component {
  render () {
    return (
      <div className='new-contact'>
        <h1>New Contact</h1>
        <form>
          <input type='text' name='name' />
          <input type='text' name='email' />
          <input type='text' name='profile_picture' />
          <input type='text' name='super_power' />
        </form>
      </div>
    )
  }
}

export default NewContact
