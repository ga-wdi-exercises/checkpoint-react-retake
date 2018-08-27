import React, {Component } from 'react'

class NewContact extends Component {
    constructor(){
        super() 
        this.state = {
            form: {
                name: '',
                email: '',
                profile_picture: ''
            }
        }
    }

    onChange = (e) => {
        e.preventDefault()
        const formInput = this.state.form
        formInput[e.target.name] = e.target.value
        console.log(formInput)
        this.setState({
            form: formInput
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        let formState = this.state.form
        
    }

    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form>
                    <input type="text" name="name" onChange={this.onChange} placeholder="name"/>
                    <br />
                    <input type="email" name="email" onChange={this.onChange} placeholder="email"/>
                    <br/>
                    <input type="text" name="profile_picture" onChange={this.onChange} placeholder="pictureURL"/>
                    <br/>
                    <input type="text" name="super_power" onChange={this.onChange} placeholder="super_power"/>

                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default NewContact