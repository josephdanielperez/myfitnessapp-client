import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import { checkLoginStatus, fetchSplits } from './actions/allActions'

import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'

import Home from './components/Home'
import Dashboard from './components/Dashboard'
import WorkoutContainer from './containers/WorkoutContainer'
import ExercisesContainer from './containers/ExercisesContainer'
import Exercises from './components/Exercises'
import NotFound from './components/NotFound'
import NotLoggedIn from './components/NotLoggedIn'

class App extends Component {

    constructor() {
        super();

        this.state = {
            loggedInStatus: 'NOT_LOGGED_IN',
            user: {}
        }
    }

    componentDidMount() {
        this.props.checkLoginStatus()
        this.props.fetchSplits()
    }

    render() {
        if (this.props.loggedInStatus === 'NOT_LOGGED_IN') {
            return (
                <div>
                    <Header />
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={ Home } />
                        <Route exact path='/workout' component={ NotLoggedIn } />
                        <Route exact path='/exercises' component={ NotLoggedIn } />
                        <Route exact path='/exercises/:id' component={ NotLoggedIn }/>
                        <Route path='*' component={ NotFound } />
                    </Switch>
                    <Footer />
                </div>
            )
        }

        return (
            <div>                
                <Header />
                <Nav />
                <Switch>
                    <Route exact path='/' component={ Dashboard } />
                    <Route exact path='/workout' component={ WorkoutContainer } />
                    <Route exact path='/exercises' component={ ExercisesContainer } />
                    <Route path='/exercises/:id' render={routerProps => (<Exercises {...routerProps} splits={this.props.splits} />)} />
                    <Route path='*' component={ NotFound } />
                </Switch>
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