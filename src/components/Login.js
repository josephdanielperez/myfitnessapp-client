import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchLogin } from '../actions/allActions'

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
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

        const data = {
            user: {
                username: this.state.username,
                password: this.state.password,
            }
        }

        this.props.fetchLogin(data);

        // fetch('http://localhost:3000/sessions', {
        //     credentials: 'include',
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'accept': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(resp => resp.json())
        // .then(json => {
        //     if (json.logged_in) {
        //         this.props.handleSuccessfulAuth(json)
        //     } else {
        //         alert('invalid credentials, please try again')
        //     }
        // })
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

const mapStateToProps = state => {
    return {
        user: state.user,
        loggedInStatus: state.loggedInStatus
    }
}

export default connect(mapStateToProps, { fetchLogin })(Login);