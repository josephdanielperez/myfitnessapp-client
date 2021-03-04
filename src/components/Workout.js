import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class Workout extends Component {

    completeExercise(e) {
        const check = e.target
        check.parentElement.classList.toggle('completed')

        const workouts = document.getElementsByClassName('workout')
        const completedWorkouts = document.getElementsByClassName('completed')
        const finishButton = document.getElementById('finish-workout')

        if (workouts.length === completedWorkouts.length) {
            finishButton.classList.remove('hide')
        } else {
            finishButton.classList.add('hide')
        }
    }

    render() {
        return(
            <div id='workout-div'>
                <h1>Today's Workout</h1>
                <ul>
                    { this.props.exercises.map(exercise =>
                        <div className='workout' key={exercise.id}>
                            <li className='workout-item' value={exercise.name}><a target='_blank' rel='noreferrer' href={exercise.url}>{exercise.name}</a></li>
                            <button className='complete-btn' onClick={this.completeExercise}><FontAwesomeIcon icon={faCheck} /></button>
                        </div>
                    )}
                </ul>

                <br />

                <div className='finish-button'>
                    <button onClick={this.props.handleReset} className='btn hide' id='finish-workout'>finish workout</button>
                </div>
            </div>
        )
    }
    
}
  
export default Workout