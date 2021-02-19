import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

import Home from './Home'
import WorkoutsForm from './WorkoutsForm'
import WorkoutsGenerate from './WorkoutsGenerate'
import WorkoutsList from './WorkoutsList'
import ExercisesContainer from './ExercisesContainer'
import GeneratedContainer from './GeneratedContainer'
import WorkoutsContainer from './WorkoutsContainer'
import NotFound from './NotFound'

const Router = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/workouts' component={ WorkoutsList } />
                <Route path='/workouts/generate' component={ WorkoutsGenerate } />
                <Route path='/generated' component={ ExercisesContainer } />
                <Route path='/test' component={ WorkoutsContainer } />
                <Route path='*' component={ NotFound } />
            </Switch>
            <Footer />
        </div>
    );
}

export default Router;