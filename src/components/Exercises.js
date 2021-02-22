import React, { Component } from 'react'

// import { fetchSplitExercises, filterExercises } from '../actions/workoutsActions'

class Exercises extends Component {

    state = {
        exercises: []
    }
    
    componentDidMount() {
        this.fetchSplitExercises()
    }

    fetchSplitExercises = () => {
        fetch(`http://localhost:3000/splits/${this.props.match.params.slug}`)
        .then(resp => resp.json())
        .then(split => {
            this.setState({ exercises: split.exercises });
        })
    }

    render() {
        return(
            <div>
                <h1>Exercises:</h1>
                <ul>
                    { this.state.exercises.map(exercise =>
                        <div key={exercise.id}>
                            <li><a target='_blank' rel='noreferrer' href={exercise.url}>{exercise.name}</a></li>
                        </div>
                    )}
                </ul>
            </div>
        )
    }
    
}
  
export default Exercises;