import React, { Component } from 'react'

export default class Registration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            password_confirmation: '',
            registrationErrors: ''
        }
    }

    render() {
        return (
            <div id='content'>
                <div id='container'>
                    
                </div>
            </div>
        )
    }

}