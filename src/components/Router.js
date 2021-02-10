import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import UsersContainer from './UsersContainer'
import UsersForm from './UsersForm'
import WorkoutsForm from './WorkoutsForm'
import WorkoutsGenerate from './WorkoutsGenerate'
import WorkoutsList from './WorkoutsList'

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route path ='/signup' component={UsersForm}/>
                <Route exact path='/workouts' component={WorkoutsList} />
                <Route path='/workouts/new' component={WorkoutsForm} />
                <Route path='/workouts/generate' component={WorkoutsGenerate} />
                <Route path='/users' component={UsersContainer} />
            </Switch>
        </div>
    );
}

export default Router;