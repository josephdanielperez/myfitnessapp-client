import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import UsersList from './UsersList'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/users' component={UsersList} />
        </Switch>
    );
}

export default Router;