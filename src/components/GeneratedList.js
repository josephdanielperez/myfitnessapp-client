import React from 'react'
import { connect } from 'react-redux'

const GeneratedList = ({ exercises }) => {
    return (
        <div>
            <h1>Exercises List</h1>
            {exercises.map(exercise => <ul><li key={exercise.id}>{exercise.name}</li></ul>)}
        </div>
    );
}

const mapStateToProps = state => {
    return { exercises: state.exercises }
}

export default connect(mapStateToProps)(GeneratedList);