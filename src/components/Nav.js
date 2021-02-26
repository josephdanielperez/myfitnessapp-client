import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () =>

    <nav>
        <div id='nav'>
            <Link to='/'>Home</Link>
            <Link to='/workout'>Workout</Link>
            <Link to='/exercises'>Exercises</Link>
        </div>
    </nav>

export default Nav