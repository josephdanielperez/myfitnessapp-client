import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchLogout } from '../actions/allActions'
import Registration from './Registration'
import Login from './Login'

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
        this.props.fetchLogout()
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

const mapStateToProps = state => {
    return {
        splits: state.splits,
        user: state.user,
        loggedInStatus: state.loggedInStatus
    }
}

export default connect(mapStateToProps, { fetchLogout })(Home);