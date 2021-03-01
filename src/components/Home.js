import React, { Component } from 'react'
import Registration from './auth/Registration'
import Login from './auth/Login'

class Home extends Component {

    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push('/dashboard')
    }

    handleLogoutClick() {
        fetch('http://localhost:3000/logout', {
            credentials: 'include',
            method: 'DELETE'
        })
        .then(resp => this.props.handleLogout())
    }

    render() {
        return (
            <div id='content'>
                <div id='container'>
                    <h1>Status: {this.props.loggedInStatus} </h1>
                    <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                    <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
                    <button onClick={this.handleLogoutClick}>logout</button>
                </div>
            </div>
        )
    }

}

export default Home;