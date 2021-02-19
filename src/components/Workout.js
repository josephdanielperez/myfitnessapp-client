import React from 'react';

const Workout = ({ state }) => {

    return(
        <div id='workout-div'>
            <h1>Today's Workout</h1>
            <ul>
                { state.exercises.map(exercise =>
                    <div className='workout' key={exercise.id}>
                        <li className='workout-item' value={exercise.name}>{exercise.name}</li>
                        <button className='complete-btn'>complete</button>
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

export default Workout;