import React, { Component } from 'react'
import { connect } from 'react-redux'
import WorkoutForm from './WorkoutForm'
import Workout from './Workout'


import { fetchSplits, filterExercises } from '../actions/allActions'

class WorkoutContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            split: '1',
            length: '3',
            exercises: [],            
        }
    }

    componentDidMount() {
        this.props.fetchSplits();
    }

    changeStateHandler = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitStateHandler = (e) => {
        e.preventDefault();

        this.setState({ exercises: filterExercises(this.state.split, this.state.length) })
    }

    completeWorkoutHandler = (e) => {
        e.preventDefault();

        alert('Great job today! See you for another workout soon!');
        window.location.reload();
    }
  
    render() {
        if (!this.state.exercises.length) {
            return(
                <div id='content'>
                    <div id='container'>
                        <WorkoutForm splits={this.props.splits} state={this.state} changeStateHandler={this.changeStateHandler} submitStateHandler={this.submitStateHandler} />
                    </div>
                </div>
            )
        } else {
            return(
                <div id='content'>
                    <div id='container'>
                        <Workout exercises={this.state.exercises} completeWorkoutHandler={this.completeWorkoutHandler} />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        splits: state.splits,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSplits: () => dispatch(fetchSplits()),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);