import React, { Component } from 'react'

class Exercises extends Component {

    state = {
        id: '1',
        exercises: [],
    }
    
    componentDidMount() {
        this.fetchSplitExercises()
    }

    fetchSplitExercises() {
        fetch(`http://localhost:3000/splits/${this.state.id}`)
        .then(resp => resp.json())
        .then(split => {
            this.setState({
                exercises: split.exercises
            })
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        setTimeout(() => this.fetchSplitExercises(), 0)
    }

    render() {
        return(
            <div id='content'>
                <div id='container'>
                    <div id='workout-div'>
                        <div id='exercises-select-wrapper'>
                            <select value={this.state.id} onChange={this.handleChange} name='id' id='exercises-select'>
                                { this.props.splits.map(split => <option value={split.id} key={split.id}>{split.name}</option>) }                            
                            </select>
                        </div>

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