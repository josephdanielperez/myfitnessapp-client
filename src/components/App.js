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
        this.handleLogout = this.handleLogout.bind(this)
    }

    componentDidMount() {
        this.checkLoginStatus();
    }

    checkLoginStatus() {
        fetch('http://localhost:3000/logged_in', {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.logged_in && this.state.loggedInStatus === 'NOT_LOGGED_IN') {
                this.setState({
                    loggedInStatus: 'LOGGED_IN',
                    user: json.user
                })
            } else if (!json.logged_in && this.state.loggedInStatus === 'LOGGED_IN') {
                this.setState({
                    loggedInStatus: 'NOT_LOGGED_IN',
                    user: {}
                })
            }
        })
    }

    handleLogin(data) {
        this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: data.user
        })
    }

    handleLogout() {
        this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
            user: {}
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Nav />
                <br /><br /><br />
                <Switch>
                    <Route exact path='/' render={props => ( <Home {...props} handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus} /> )} />
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