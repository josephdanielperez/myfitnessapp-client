import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSplits } from '../actions/allActions'

import Exercises from '../components/Exercises'


class ExercisesContainer extends Component {

    componentDidMount() {
        this.props.fetchSplits()
    }
  
    render() {
        return(
            <Exercises splits={this.props.splits} />
        )
    }
}

const mapStateToProps = state => {
    return {
        splits: state.splits
    }
}
  
export default connect(mapStateToProps, { fetchSplits })(ExercisesContainer)