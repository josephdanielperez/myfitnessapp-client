import React, { Component } from 'react'

class Exercises extends Component {

    state = {
        exercises: [],
        split: ''
    }
    
    componentDidMount() {
        this.fetchSplitExercises()
    }

    fetchSplitExercises = () => {
        fetch(`http://localhost:3000/splits/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(split => {
            this.setState({
                exercises: split.exercises,
                split: split.split.name
            });
        })
    }

    render() {
        return(
            <div id='content'>
                <div id='container'>
                    <div id='workout-div'>
                        <h1>{this.state.split}</h1>
                        <ul>
                            { this.state.exercises.map(exercise =>
                                <div key={exercise.id} id='split'>
                                    <li id='split-item'>
                                        <a target='_blank' rel='noreferrer' href={exercise.url}>{exercise.name}</a>
                                    </li>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}
  
export default Exercises