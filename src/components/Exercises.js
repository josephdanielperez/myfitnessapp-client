import React, { Component } from 'react'

class Exercises extends Component {

    state = {
        exercises: [],
        split: '',
        type: 'Press'
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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div id='content'>
                <div id='container'>
                    <div id='workout-div'>
                        <h1>{this.state.split}</h1>
                        <form>
                            <select value={this.state.type} name='type' onChange={this.handleChange}>
                                <option value='Press'>Presses</option>
                                <option value='Row'>Rows</option>
                                <option value='Raise'>Raises</option>
                            </select>
                        </form>
                        <ul>
                            { this.state.exercises.filter(exercise => exercise.name.includes( this.state.type )).map(exercise =>
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