import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchSplits } from '../actions/allActions'

class ExercisesContainer extends Component {

    componentDidMount() {
        this.props.fetchSplits()
    }
  
    render() {
        return(
            <div id='content'>
                <div id='container'>
                    <div id='workout-div'>
                        {/* <h1>Exercises</h1>
                        <ul>
                            { this.props.exercises.map(exercise =>
                                <div key={exercise.id} id='split'>
                                <li id='split-item'>
                                    <a target='_blank' rel='noreferrer' href={exercise.url}>{exercise.name}</a>
                                </li>
                            </div>
                            )}
                        </ul> */}
                        <h1>Splits</h1>
                        <ul>
                            { this.props.splits.map(split =>
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

const mapStateToProps = state => {
    return {
        splits: state.splits
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSplits: () => dispatch(fetchSplits())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ExercisesContainer)