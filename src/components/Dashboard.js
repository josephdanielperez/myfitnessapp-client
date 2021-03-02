import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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
                    <img src='https://media.giphy.com/media/Ae9RmQOtH8vmXCMlc4/giphy.gif' alt='MyFitnessApp Home Page'/>
                    <div id='register-login'>
                        <h4 onClick={this.handleLogoutClick}>logout</h4>
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