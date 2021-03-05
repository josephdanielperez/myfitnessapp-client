import React from 'react'
import { Link } from 'react-router-dom'

const SplitsList = (props) => {

    return (
        <div>
            {props.splits.map(split =>
                <li key={split.id}>
                    <Link to={`/exercises/${split.name}`}>{split.name}</Link>
                </li>    
            )}
        </div>
    )
}

export default SplitsList