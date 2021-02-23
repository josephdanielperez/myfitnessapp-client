import React, { Component } from 'react'
// import { connect } from 'react-redux'
import WorkoutForm from './WorkoutForm'
import Workout from './Workout'

import { fetchSplits, filterExercises } from '../actions/workoutsActions'

class WorkoutContainer extends Component {

    state = {
        loading: true,
        toggle: true,
        split: '1',
        length: '3',
        splits: [],
        exercises: [],
    }

    // IF SAVING TO LOCAL STORAGE, USE THIS //
    // initialState = () => ({
    //     loading: false,
    //     toggle: false,
    //     split: '1',
    //     length: '3',
    //     splits: [],
    //     exercises: [],
    // })

    componentDidMount() {
        fetchSplits()
        .then(data => this.setState({ splits: data }))

        // NECESSARY?!?!?!?!? //
        setTimeout(this.toggleState, 500)
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
        setTimeout(this.toggleState, 500);
    }

    toggleState = (e) => {
        this.setState({
            loading: !this.state.loading,
            toggle: !this.state.toggle
        })
    }

    completeWorkoutHandler = (e) => {
        e.preventDefault();

        alert('Great job today! See you for another workout soon!');
        // this.setState(this.initialState);
        window.location.reload();
    }
  
    render() {
        if (this.state.loading) {
            return(
                <div id='content'>
                    <div id='container'>
                        <img src='https://media.giphy.com/media/hWZBZjMMuMl7sWe0x8/giphy.gif' alt='loading...'/>
                    </div>
                </div>
            )
        }
        else if (!this.state.toggle) {
            return(
                <div id='content'>
                    <div id='container'>
                        <WorkoutForm state={this.state} changeStateHandler={this.changeStateHandler} submitStateHandler={this.submitStateHandler} />
                    </div>
                </div>
            )
        } else {
            return(
                <div id='content'>
                    <div id='container'>
                        <Workout state={this.state} completeWorkoutHandler={this.completeWorkoutHandler} />
                    </div>
                </div>
            )
        }
    }
}
  
export default WorkoutContainer;