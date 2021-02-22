import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () =>

    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/workout'>Workout</Link></li>
            <li><Link to='/exercises'>Exercises</Link></li>
            <li>Reviews</li>
        </ul>
    </nav>

export default Nav