import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchLogout } from '../actions/allActions'

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
        this.props.fetchLogout()
    }

    render() {
        return (
            <div id='content'>
                <div id='container'>
                    <div id='register-login'>
                        <h1>Hello, {this.props.user}</h1>
                        <button id='logout-button' onClick={this.handleLogoutClick}>logout</button>
                    </div>
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

export default connect(mapStateToProps, { fetchLogout })(Dashboard);