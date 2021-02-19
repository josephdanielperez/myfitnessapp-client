import React from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom'

const GeneratedList = (props) => {
    return (
        <div class='workout'>
            <ul>
                <li class='workout-name'>{props.exercises.name}</li>
                <button class='complete-btn'>complete exercise</button>
            </ul>
            <button>complete workout</button>
        </div>
    );
}

export default GeneratedList;