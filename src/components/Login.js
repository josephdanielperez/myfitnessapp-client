import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { login } from '../actions/usersActions'
import { updateLoginForm } from '../actions/loginForm'

class Login extends Component {
    state = {
        username: '',
        password: '',
        submitted: false
    };

    handleChange = event => {
        event.persist();
        const { name, value} = event.target
        this.setState({ [name]: value})
    };

    handleClick = event => {
        this.setState({
            submitted: true
        })
    };

    handleSubmit = event => {
        event.preventDefault()

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(resp => console.log(resp))
        .then(user => {
            if (user.error) {
                alert(user.error)
                console.log('failure', user)
            } else {
                console.log('success', user)
            }
        })
        .catch(console.log())
        login(this.state)
        console.log('info', this.state)
    };

    render() {
        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                        required
                    />
                    <br />

                    <label>Password: </label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <br />

                    <input type='submit' className='btn' value='Log In' onClick={this.handleClick} />
                </form>

                <div className='note'>
                    <p>No account? Sign up <Link to='/signup'>here</Link>.</p>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        loginData: state.loginForm
    }
}

export default Login;