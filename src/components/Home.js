import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: ''
        }
    }

    render() {
        return (
            <div id='content'>
                <div id='container'>
                    <img src='https://media.giphy.com/media/Ae9RmQOtH8vmXCMlc4/giphy.gif' alt='MyFitnessApp Home Page'/>
                    <div id='register-login'>
                    <Link to='/register'>register</Link> | <Link to='/login'>login</Link>
                        <span onClick={this.setState({selected: 'login' })}>loginnnn</span> | <span onClick={this.setState({selected: 'register'})}>registerrrr</span>
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