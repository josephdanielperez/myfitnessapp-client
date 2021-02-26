import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { fetchSplits } from '../actions/workoutsActions'

class ExercisesContainer extends Component {

    state = {
        loading: true,
        splits: [],
        exercises: [],
    }

    componentDidMount() {
        fetchSplits()
        .then(data => this.setState({ splits: data }))
    }

  
    render() {
        return(
            <div id='content'>
                <div id='container'>
                    <div id='workout-div'>
                        <h1>Splits</h1>
                        <ul>
                            { this.state.splits.map(split =>
                                <div id='split' key={split.id}>
                                    <li id='split-item'>
                                        <Link to={`/exercises/${split.id}`}>{split.name}</Link>
                                    </li>
                                </div>
                            ) }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
  
export default ExercisesContainer;