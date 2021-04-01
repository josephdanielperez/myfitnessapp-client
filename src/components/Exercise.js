import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Exercise extends Component {

    render() {
        return(
            <div key={exercise.id} id='split'>
                <li id='split-item'>
                    <a target='_blank' rel='noreferrer' href={exercise.url}>{exercise.name}</a>
                </li>
            </div>
        )
    }
}
  
export default Exercise