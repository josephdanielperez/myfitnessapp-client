import React, { Component } from 'react'

import Login from './Login'
import Registration from './Registration'

class Home extends Component {

    state = {
        selected: 'register'
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

export default Home