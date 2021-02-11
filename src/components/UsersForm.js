import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { addUser } from '../actions/usersActions'

class UsersForm extends Component {

    state = {
        username: '',
        name: '',
        password: '',
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addUser(this.state)
    }

    render() {
        return (
            <div>
                <h1>Create An Account</h1>
                <form onSubmit={this.handleSubmit}>

                    <label>Username: </label>
                    <input type='text' value={this.state.username} onChange={this.handleChange} name='username' />
                    < br />< br />
                    <label>Name: </label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name='name' />
                    < br />< br />
                    <label>Password: </label>
                    <input type='password' value={this.state.password} onChange={this.handleChange} name='password' />
                    < br />< br />
                    <input type='submit' value='create account' />

                </form>

                <div className='note'>
                    <p>Have an account? Log in <Link to='/login'>here</Link>.</p>
                </div>
            </div>
        );
    }
}

export default connect(null, { addUser })(UsersForm);