import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () =>

    <nav>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/workout'>Workout</Link></li>
        <li><Link to='/exercises'>Exercises</Link></li>
        <li>Reviews</li>
    </nav>

export default Nav