import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Nav extends Component {

    render() {
        return (
    <nav>
        <div id='nav'>
            <div id='float-left'>
            <Link to='/'>Home</Link>
            <Link to='/workout'>Workout</Link>
            <Link to='/exercises'>Exercises</Link>
            </div>

            <div id='float-right'>
                <p>{this.props.user}</p>
            </div>
        </div>
    </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        splits: state.splits,
        user: state.user
    }
}

export default connect(mapStateToProps)(Nav);