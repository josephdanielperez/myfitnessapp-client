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
  
export default connect(mapStateToProps, { fetchSplits })(ExercisesContainer)