// this will be my container = data + methods

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions/usersActions'
import UsersForm from './UsersForm'
import UsersList from './UsersList'

class UsersContainer extends Component {

    componentDidMount() {
        this.props.fetchUsers()
    };

    render() {
        return (
            <div>
                <UsersForm />
                <UsersList />
            </div>
        );
    }
}

export default connect(null, { fetchUsers })(UsersContainer);