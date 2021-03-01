import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            password_confirmation: '',
            loginErrors: ''
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

        axios.post('http://localhost:3000/sessions', {
            user: {
                username: this.state.username,
                password: this.state.password,
            }
        }, { withCredentials: true })
        .then(resp => {
            if (resp.data.logged_in) {
                this.props.handleSuccessfulAuth(resp.data)
            }
        })
        .catch(error => console.log('login error', error))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type='username' name='username' value={this.state.username} onChange={this.handleChange} required /><br />

                    <label>Password: </label>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange} required /><br />

                    <button type='submit'>login</button>
                </form>
            </div>
        )
    }

}