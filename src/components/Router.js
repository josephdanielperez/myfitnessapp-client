import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'

import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

import Home from './Home'
import WorkoutContainer from './WorkoutContainer'
import ExercisesContainer from './ExercisesContainer'
import NotFound from './NotFound'

const Router = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/workout' component={ WorkoutContainer } />
                <Route exact path='/exercises' component={ ExercisesContainer } />
                <Route path='*' component={ NotFound } />
            </Switch>
            {/* DOUBLE CHECK IF NECESSARY, NEXT 2 LINES */}
            <Divider />
            <br /><br />
            <Footer />
        </div>
    );
}

export default Router;