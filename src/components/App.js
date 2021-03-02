import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import { checkLoginStatus, fetchSplits } from '../actions/allActions'

import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

import Home from './Home'
import Dashboard from './Dashboard'
import WorkoutContainer from './WorkoutContainer'
import ExercisesContainer from './ExercisesContainer'
import Exercises from './Exercises'
import NotFound from './NotFound'
import NotLoggedIn from './NotLoggedIn'

class App extends Component {

    constructor() {
        super();

        this.state = {
            loggedInStatus: 'NOT_LOGGED_IN',
            user: {}
        }
    }

    componentDidMount() {
        this.props.checkLoginStatus();
        this.props.fetchSplits()
    }

    render() {
        if (this.props.loggedInStatus === 'NOT_LOGGED_IN') {
            return (
                <div>
                <Header />
                <Nav />
                <br /><br /><br />
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route path='*' component={ NotLoggedIn } />
                </Switch>
                <br /><br /><br />
                <Footer />
                </div>
            )
        }

        return (
            <div>                
                <Header />
                <Nav />
                <br /><br /><br />
                <Switch>
                    <Route exact path='/' component={ Dashboard } />

                    <Route exact path='/sad' component={ Home } />

                    <Route exact path='/workout' component={ WorkoutContainer } />
                    <Route exact path='/exercises' component={ ExercisesContainer } />
                    <Route exact path='/exercises/:id' component={ Exercises }/>
                    <Route path='*' component={ NotFound } />
                </Switch>
                <br /><br /><br />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        splits: state.splits,
        user: state.user,
        loggedInStatus: state.loggedInStatus
    }
}

export default connect(mapStateToProps, { checkLoginStatus, fetchSplits })(App);