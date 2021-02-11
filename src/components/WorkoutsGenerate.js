import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { generateWorkout } from '../actions/workoutsActions'

class WorkoutsGenerate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            splits: [],
            isLoading: false,
            split: 'Chest',
            length: '3',
        }
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.generateWorkout(this.state)
        console.log(this.state)
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch(`http://localhost:3000/splits`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({ 
                splits: data,
                isLoading: false
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Generate A Workout</h1>
                <form onSubmit={this.handleSubmit}>

                    <label>Select a split: </label>
                    <select value={this.state.split} onChange={this.handleChange} name='split' defaultValue='HITT'>
                        { this.state.splits.map(split => { <option value={`split.name`}>{`split.name`}</option>})}
                        {/* <option value="Chest">Chest</option>
                        <option value="Back">Back</option>
                        <option value="Shoulders">Shoulders</option>
                        <option value="Legs">Legs</option>
                        <option value="Arms">Arms</option>
                        <option value="HIIT">HIIT (Cardio)</option> */}
                    </select>
                    < br />< br />
                    <label>Select the number of exercises you desire: </label>
                    <select value={this.state.length} onChange={this.handleChange} name='length'>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>    
                    </select>
                    < br />< br />
                    <input type='submit' value='generate workout' />

                </form>

                <div className='note'>
                    <p>Have a workout already created? Find it <Link to='/workouts'>here</Link>.</p>
                </div>
            </div>
        );
    }
}

export default WorkoutsGenerate;