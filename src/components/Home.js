import React, { Component } from 'react'
import { connect } from 'react-redux'

import Registration from './Registration'
import Login from './Login'

class Home extends Component {

    render() {
        return (
            <div id='content'>
                <div id='container'>
                    <img src='https://media.giphy.com/media/Ae9RmQOtH8vmXCMlc4/giphy.gif' alt='MyFitnessApp Home Page'/>
                    <h3>FITNESS MADE SIMPLE</h3>
                    <Registration />
                    <Login />
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

export default connect(mapStateToProps)(Home);