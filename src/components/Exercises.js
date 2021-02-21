import React, { Component } from 'react';

// import { filterExercises } from '../actions/workoutsActions'
// import { fetchExercises } from '../actions/workoutsActions';

class Exercises extends Component {

    state = {
        exercises: [],
    }
    
    componentDidMount() {
        this.filterExercises();
    }

    filterExercises = () => {
        fetch(`http://localhost:3000/splits/${this.props.match.params.slug}`)
        .then(resp => resp.json())
        .then(split => {
            this.setState({ exercises: split.exercises });
        })
    };

    render() {
        return(
            <div>
                <h1>Exercises:</h1>
                <ul>
                    { this.state.exercises.map(exercise => <li key={exercise.id}>{exercise.name}</li>)}
                </ul>
            </div>
        )
    }
    
}
  
export default Exercises;