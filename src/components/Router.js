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
                <Route path='*' component={ NotFound } />
            </Switch>
            <br /><br /><br />
            <Footer />
        </div>
    );
}

export default Router;