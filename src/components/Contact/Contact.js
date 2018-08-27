import React, {Component } from 'react'

class Contact extends Component {
    constructor(props) {
        super(props) 
        this.state= {
            contact: this.props.data
        }
    }
    render() {
        let data = this.state.contact
        return(
        <div className="contact">
            <img src={`${data.profile_picture}`} alt={data.name}/>
            <h2>{data.name}</h2>
            <h3>{data.email}</h3>
            <h4>{data.super_power}</h4>

        </div>
    )
    }
}
export default Contact