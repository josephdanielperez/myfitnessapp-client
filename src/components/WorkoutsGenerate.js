import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchSplits, filterExercises } from '../actions/workoutsActions'

class WorkoutsGenerate extends Component {

    state = {
        loading: true,
        split: '1',
        length: '3',
        splits: [],
        exercises: [],
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = async e => {
        e.preventDefault()

        await this.setState({ exercises: filterExercises(this.state) });
        console.log(this.state);
    }

    componentDidMount() {
        fetchSplits()
        .then(data => this.setState({ splits: data, loading: false }))
    }

    render() {
        if (this.state.loading) {
            <div>loading...</div> 
        }

        return (
            <div>
                <h1>Generate A Workout</h1>
                <form onSubmit={this.handleSubmit}>

                    <label>Select a split: </label>
                    <select value={this.state.split} onChange={this.handleChange} name='split'>
                        { this.state.splits.map(split => <option value={split.id} key={split.id}>{split.name}</option>)}
                    </select>
                    < br />< br />
                    
                    <label>Number of exercises you wish to complete: </label>
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
        )
    }
}

// is connect needed? //
export default connect(null, { filterExercises })(WorkoutsGenerate);