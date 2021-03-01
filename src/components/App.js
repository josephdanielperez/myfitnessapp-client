import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css'

import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

import Home from './Home'
import Dashboard from './Dashboard'
import WorkoutContainer from './WorkoutContainer'
import ExercisesContainer from './ExercisesContainer'
import Exercises from './Exercises'
import NotFound from './NotFound'

class App extends Component {

    constructor() {
        super();

        this.state = {
            loggedInStatus: 'NOT_LOGGED_IN',
            user: {}
        }

        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(data) {
        console.log(data)
        this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: data.user
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Nav />
                <br /><br /><br />
                <Switch>
                    <Route exact path='/' render={props => ( <Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} /> )} />
                    <Route exact path='/dashboard' render={props => ( <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} /> )} />
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

export default App;