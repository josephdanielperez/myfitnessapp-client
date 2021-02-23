import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () =>

    <nav>
        <ul id='nav'>
            <li id='nav-item'><Link to='/'>Home</Link></li>
            <li id='nav-item'><Link to='/workout'>Workout</Link></li>
            <li id='nav-item'><Link to='/exercises'>Exercises</Link></li>
            <li id='nav-item'>Reviews</li>
        </ul>
    </nav>

export default Nav