import React, { Component } from 'react'
import { connect } from 'react-redux'

import Login from './Login'
import Registration from './Registration'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 'register'
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
                        <button onClick={this.handleChange} id='register-login-button' value='register' >REGISTER</button>
                        <button onClick={this.handleChange} id='register-login-button' value='login' >LOGIN</button>

                        {(this.state.selected === 'register') && <Registration />}
                        {(this.state.selected === 'login') && <Login />}
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