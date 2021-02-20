import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class WorkoutForm extends Component {
    
    render() {
        return (
            <div>
                <h1>Generate A Workout</h1>
                <form onSubmit={this.props.submitStateHandler}>

                    <label>Select a split: </label>
                    <select value={this.props.state.split} onChange={this.props.changeStateHandler} name='split'>
                        { this.props.state.splits.map(split => <option value={split.id} key={split.id}>{split.name}</option>) }
                    </select>
                    < br />< br />
                    
                    <label>Number of exercises you wish to complete: </label>
                    <select value={this.props.state.length} onChange={this.props.changeStateHandler} name='length'>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    < br />< br />

                    <input type='submit' value='generate workout' className='hide' />

                </form>

                <div className='note'>
                    <p>Have a workout already created? Find it <Link to='/workouts'>here</Link>.</p>
                </div>

            </div>
        )
    }

}

export default WorkoutForm;