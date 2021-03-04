import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchRegistration } from '../actions/allActions'

class Registration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            password_confirmation: ''
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
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }
        }

        this.props.fetchRegistration(data);
    }

    render() {
        return (
            <div id='login-register-form'>
                <form onSubmit={this.handleSubmit}>
                    <input type='username' placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange} required /><br />
                    <input type='password' placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} required /><br />
                    <input type='password' placeholder='Confirm Password' name='password_confirmation' value={this.state.password_confirmation} onChange={this.handleChange} required /><br />

                    <button type='submit' id='register-button'>register</button>
                </form>
            </div>
        )
    }

}

// const mapStateToProps = state => {
//     return {
//         splits: state.splits,
//         user: state.user,
//         loggedInStatus: state.loggedInStatus
//     }
// }

export default connect(null, { fetchRegistration })(Registration)