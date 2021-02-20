import React, { Component } from 'react'
// import { connect } from 'react-redux'

import { fetchSplits, filterExercises } from '../actions/workoutsActions'

class ExercisesContainer extends Component {

    state = {
        loading: false,
        toggle: false,
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
        else if (!this.state.toggle) {
            return(
                <div>
                    spalits
                </div>
            )
        } else {
            return(
                <div>
                    spalits
                </div>
            )
        }
    }
}
  
export default ExercisesContainer;