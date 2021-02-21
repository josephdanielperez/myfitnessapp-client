import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { fetchSplits } from '../actions/workoutsActions'

class ExercisesContainer extends Component {

    state = {
        loading: false,
        splits: [],
        exercises: [],
    }

    componentDidMount() {
        fetchSplits()
        .then(data => this.setState({ splits: data }))
    }
  
    render() {
        if (this.state.loading) {
            return(
                <div>
                    <p>loading...</p>
                </div>
            )
        }
        else {
            return(
                <div>
                    <h1>Splits</h1>
                    <ul>
                        { this.state.splits.map(split => <li key={split.id}><Link to={`/exercises/${split.id}`}>{split.name}</Link></li>) }
                    </ul>
                </div>
            )
        }
    }
}
  
export default ExercisesContainer;