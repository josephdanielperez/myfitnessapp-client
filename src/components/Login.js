import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchLogin } from '../actions/allActions'

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const data = {
            user: {
                username: this.state.username,
                password: this.state.password
            }
        }

        this.props.fetchLogin(data)
    }

    render() {
        return (
            <div id='login-register-form'>
                <form onSubmit={this.handleSubmit}>
                    <input type='username' placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange} required /><br />
                    <input type='password' placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} required /><br />

                    <button type='submit' id='login-button' >login</button>
                </form>
            </div>
        )
    }

}

export default connect(null, { fetchLogin })(Login)