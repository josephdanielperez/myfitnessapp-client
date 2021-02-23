import React, { Component } from 'react'

// import { fetchSplitExercises, filterExercises } from '../actions/workoutsActions'

class Exercises extends Component {

    state = {
        loading: true,
        exercises: []
    }
    
    componentDidMount() {
        this.fetchSplitExercises()

        // IS THIS NECESSARY OH MY GAWD THE THIRD TIME //
        setTimeout(this.toggleState, 500)
    }

    fetchSplitExercises = () => {
        fetch(`http://localhost:3000/splits/${this.props.match.params.slug}`)
        .then(resp => resp.json())
        .then(split => {
            this.setState({ exercises: split.exercises });
        })
    }

    toggleState = (e) => {
        this.setState({
            loading: !this.state.loading
        })
    }

    render() {
        if (this.state.loading) {
            return(
                <div id='content'>
                    <div id='container'>
                        <p>loading...</p>
                    </div>
                </div>
            )
        } else {
            return(
                <div id='content'>
                    <div id='container'>
                        <div id='workout-div'>
                            <h1>Exercises:</h1>
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
    
}
  
export default Exercises;