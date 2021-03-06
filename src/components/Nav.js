import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Nav extends Component {

    render() {
        return (
            <nav>
                <div id='nav'>
                    <div id='nav-content'>
                        <Link to='/'>Home</Link>
                        <Link to='/workout'>Workout</Link>
                        <Link to='/exercises'>Exercises</Link>

                        {this.props.loggedInStatus === 'LOGGED_IN' &&
                            <div id='float-right'>
                                <p>Logged in as: {this.props.user}</p>
                            </div>
                        }

                    </div>
                </div>
            </nav>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        loggedInStatus: state.loggedInStatus
    }
}

export default connect(mapStateToProps)(Nav)