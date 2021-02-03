import React from 'react';

import Router from './Router';
import UsersContainer from './UsersContainer'

const App = () => {
    return (
        <div>
            <UsersContainer />
            <Router />
        </div>
    )
}

export default App;