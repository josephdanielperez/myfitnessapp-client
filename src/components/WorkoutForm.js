import React, { Component } from 'react'

class WorkoutForm extends Component {
    
    render() {
        return (
            <div>
                <h1>Generate A Workout</h1>
                <form onSubmit={this.props.handleSubmit}>

                    <label>Select a split: </label>
                    <select value={this.props.split} onChange={this.props.handleChange} name='split'>
                        { this.props.splits.map(split => <option value={split.id} key={split.id}>{split.name}</option>) }
                    </select>
                    < br />< br />
                    
                    <label>Number of exercises you wish to complete: </label>
                    <select value={this.props.state.length} onChange={this.props.handleChange} name='length'>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    < br />< br />

                    <input type='submit' value='generate workout' className='btn' />

                </form>
            </div>
        )
    }

}

export default WorkoutForm;