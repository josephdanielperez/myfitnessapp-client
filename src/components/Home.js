import React, { Component } from 'react'
import { connect } from 'react-redux'

import Login from './Login'
import Registration from './Registration'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            selected: e.target.value
        });
    }

    render() {
        return (
            <div id='content'>
                <div id='container'>
                    <div id='register-login'>
                        {(this.state.selected === '') && <img src='https://media.giphy.com/media/Ae9RmQOtH8vmXCMlc4/giphy.gif' alt='MyFitnessApp Home Page'/>}
                        {(this.state.selected === 'login') && <Login />}
                        {(this.state.selected === 'register') && <Registration />}

                        <button onClick={this.handleChange} id='register-login-button' value='register' >register</button>
                        <button onClick={this.handleChange} id='register-login-button' value='login' >login</button>
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

export default connect(mapStateToProps)(Home);