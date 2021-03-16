import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSplits } from '../actions/allActions'

import Split from '../components/Split'

class ExercisesContainer extends Component {

    componentDidMount() {
        this.props.fetchSplits()
    }
  
    render() {
        return(
            <div id='content'>
                <div id='container'>
                    <div id='workout-div'>
                        <h1>Splits</h1>
                        <ul>
                            { this.props.splits.map(split => <Split split={split} />) }
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
  
export default connect(mapStateToProps, { fetchSplits })(ExercisesContainer)