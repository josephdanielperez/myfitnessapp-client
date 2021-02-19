import React, { Component } from 'react'
// import { connect } from 'react-redux'
import WorkoutsForm from './WorkoutsForm'
import Workout from './Workout'

import { fetchSplits, filterExercises } from '../actions/workoutsActions'

class WorkoutsContainer extends Component {

    state = {
        loading: false,
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
            exercises: filterExercises(this.state),
            loading: !this.state.loading
        });
        setTimeout(this.toggleStateHandler, 500);
    }

    toggleStateHandler = (e) => {
        this.setState({
            loading: !this.state.loading,
            toggle: !this.state.toggle
        })
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
                    <WorkoutsForm state={this.state} changeStateHandler={this.changeStateHandler} submitStateHandler={this.submitStateHandler} />
                </div>
            )
        } else {
            return(
                <div>
                    <Workout state={this.state} />
                </div>
            )
        }
    }
}
  
export default WorkoutsContainer;