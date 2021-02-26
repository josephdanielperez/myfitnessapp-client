import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSplits, fetchExercises } from '../actions/allActions'

import TestForm from './TestForm'

class test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
            split: '1',
            length: '3',
        }
    }

    componentDidMount() {
        this.props.fetchSplits()
    }

    submitHandler = (e) => {
        e.preventDefault();
    }
  
    render() {
        return(
            <div id='content'>
                <div id='container'>
                    <TestForm splits={this.props.splits} submitHandler={this.submitHandler} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        splits: state.splits,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSplits: () => dispatch(fetchSplits()),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(test);