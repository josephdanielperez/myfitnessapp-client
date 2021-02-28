import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateSignupForm, signup } from '../actions/userActions.js'

class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        this.props.updateSignupForm();
    }

    handleChange = (e) => {
        const updatedFormInfo = {
            ...this.props.signupFormData,
            [e.target.name]: e.target.value
        }

        updateSignupForm(updatedFormInfo)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        signup(this.props.signupFormData)
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            {/* <input placeholder='name' value={this.props.signupFormData.name} name='name' type='text' onChange={this.handleChange} /><br />
            <input placeholder='username' value={this.props.signupFormData.username} name='username' type='text' onChange={this.handleChange} /><br />
            <input placeholder='password' value={this.props.signupFormData.password} name='password' type='text' onChange={this.handleChange} /><br />
            <input type='submit' value='signup' /> */}
        </form>
    )
    }
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)