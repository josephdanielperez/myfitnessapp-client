import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { logout } from '../actions/userActions.js'

const Logout = ({ logout, history }) => {
  return (
    <form id="logOutButton" onSubmit={(event) => {
            event.preventDefault()
            logout()
            history.push('/')
            }
    }>
        <input type="submit" value="Log Out"/>
    </form>
    )
}

export default withRouter(connect(null, { logout })(Logout))