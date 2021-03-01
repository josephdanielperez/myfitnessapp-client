import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            password_confirmation: '',
            registrationErrors: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3000/registrations', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: { username: this.state.username, password: this.state.password, password_confirmation: this.state.password_confirmation } })
        })
        .then(resp => {
            if (resp.ok === true) {
                this.props.handleSuccessfulAuth(resp.data)
            }
        })
        .catch(error => console.log('registration error', error))

        // axios.post('http://localhost:3000/registrations', {
        //     user: {
        //         username: this.state.username,
        //         password: this.state.password,
        //         password_confirmation: this.state.password_confirmation
        //     }
        // }, { withCredentials: true })
        // .then(resp => console.log('registration response', resp))
        // .catch(error => console.log('registration error', error))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type='username' name='username' value={this.state.username} onChange={this.handleChange} required /><br />

                    <label>Password: </label>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange} required /><br />

                    <label>Password Confirmation: </label>
                    <input type='password' name='password_confirmation' value={this.state.password_confirmation} onChange={this.handleChange} required /><br />

                    <button type='submit'>register</button>
                </form>
            </div>
        )
    }

}