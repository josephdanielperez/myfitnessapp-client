import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

import Home from './Home'
import WorkoutContainer from './WorkoutContainer'
import ExercisesContainer from './ExercisesContainer'
import Exercises from './Exercises'
import NotFound from './NotFound'

import Login from './Login'
import Logout from './Logout'
import Signup from './Signup'

const Router = () => {
    return (
        <div>
            <Header />
            <Nav />
            <br /><br /><br />
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/workout' component={ WorkoutContainer } />
                <Route exact path='/exercises' component={ ExercisesContainer } />
                <Route exact path='/exercises/:id' component={ Exercises }/>
                
                <Route exact path='/login' component={ Login } />
                <Route exact path='/logout' component={ Logout } />
                <Route exact path='/signup' component={ Signup } />
                
                <Route path='*' component={ NotFound } />
            </Switch>
            <br /><br /><br />
            <Footer />
        </div>
    );
}

export default Router;