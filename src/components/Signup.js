import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { updateSignupForm, signup } from '../actions/userActions.js'

class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            username: '',
            password: '',
            shouldRedirect: false
        }
    }

    // componentDidUpdate(prevProps) {
    //     if (!prevProps.user.loggedIn && this.props.user.loggedIn) {
    //         this.setState({ shouldRedirect: true })
    //     }
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signup(this.state)
    }

    render() {
        if (this.state.shouldRedirect) {
            return <Redirect to='/' />
        } else {
            return (
                <div id='content'>
                    <div id='container'>
                        <h1>Sign Up</h1>
                        <form onSubmit={this.handleSubmit}>
                            <label>Name: </label>
                            <input value={this.state.name} name='name' type='text' onChange={this.handleChange} /><br />
                            
                            <label>Username: </label>
                            <input value={this.state.username} name='username' type='text' onChange={this.handleChange} /><br />
                            
                            <label>Password: </label>
                            <input value={this.state.password} name='password' type='password' onChange={this.handleChange} /><br />
                            
                            <input type='submit' value='signup' />
                        </form>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)