import React, { Component } from 'react'
// import { connect } from 'react-redux'
import WorkoutsForm from './WorkoutsForm'
import Workout from './Workout'

import { fetchSplits, filterExercises } from '../actions/workoutsActions'

class WorkoutsContainer extends Component {

    state = {
        toggle: false,
        split: '1',
        length: '3',
        splits: [],
        exercises: [],
    }

    componentDidMount() {
        fetchSplits()
        .then(data => this.setState({ splits: data }))
    }

    changeStateHandler = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitStateHandler = (e) => {
        e.preventDefault();

        this.setState({
            ...this.state,
            exercises: filterExercises(this.state),
            toggle: !this.state.toggle
        })
    }
  
    render() {
        return(
            <div>
                <WorkoutsForm state={this.state} changeStateHandler={this.changeStateHandler} submitStateHandler={this.submitStateHandler} />
                <Workout state={this.state} changeStateHandler={this.changeStateHandler} submitStateHandler={this.submitStateHandler} />
            </div>
        )
    }
}
  
export default WorkoutsContainer;