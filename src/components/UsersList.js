import React from 'react'
import { connect } from 'react-redux'

const UsersList = ({ users }) => {
    return (
        <div>
            <h1>Users List</h1>
            {users.map(user => <ul><li key={user.id}>{user.username} - {user.name}</li></ul>)}
        </div>
    );
}

const mapStateToProps = state => {
    return { users: state.users }
}

export default connect(mapStateToProps)(UsersList);