import React, { Component } from 'react';

class Workout extends Component {

    completeHandler(e) {
        const check = e.target;
        check.parentElement.classList.toggle('completed');

        const workouts = document.getElementsByClassName('workout')
        const completedWorkouts = document.getElementsByClassName('completed');
        const finishButton = document.getElementById('finish-workout');

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
                    { this.props.state.exercises.map(exercise =>
                        <div className='workout' key={exercise.id}>
                            <li className='workout-item' value={exercise.name}>{exercise.name}</li>
                            <button className='complete-btn' onClick={this.completeHandler}>complete</button>
                        </div>
                    )}
                </ul>

                <br />

                <div className='finish-button'>
                    <button type='submit' className='btn hide' id='finish-workout'>finish workout</button>
                </div>
            </div>
        )
    }
    
}
  
export default Workout;