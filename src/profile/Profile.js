import React, { Component } from 'react'

class Profile extends Component {
    render() {
    const {fullName,bio,profession} = this.props
    
        return (
            <div >   
                {this.props.children} <br/>
                <span> <strong>Full Name :</strong> {fullName} </span>  <br/>
                <span> <strong>Bio :</strong> {bio} </span> <br/>
                <span> <strong>Profession :</strong> {profession} </span> <br/>
                
            </div>
        )
    }
}

export default Profile
