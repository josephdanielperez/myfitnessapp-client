import React, { Component } from 'react'
import { connect } from 'react-redux'

import WorkoutForm from '../components/WorkoutForm'
import Workout from '../components/Workout'

import { fetchSplits } from '../actions/allActions'

class WorkoutContainer extends Component {

    state = {
        split: '1',
        length: '3',
        exercises: []
    }

    componentDidMount() {
        this.props.fetchSplits()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/splits/${this.state.split}`)
        .then(resp => resp.json())
        .then(split => {
            let currentIndex = split.exercises.length;
            let temporaryValue, randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
    
                temporaryValue = split.exercises[currentIndex];
                split.exercises[currentIndex] = split.exercises[randomIndex];
                split.exercises[randomIndex] = temporaryValue;
            }
            this.setState({ exercises: split.exercises.slice(0, this.state.length) });
        })
    }

    handleReset = () => {
        alert(`Great job ${this.props.user}! See you for another workout soon!`);
        this.setState({
            split: '1',
            length: '3',
            exercises: []
        })
    }
  
    render() {
        if (!this.state.exercises.length) {
            return (
                <div id='content'>
                    <div id='container'>
                        <WorkoutForm splits={this.props.splits} state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    </div>
                </div>
            )
        } else {
            return (
                <div id='content'>
                    <div id='container'>
                        <Workout exercises={this.state.exercises} handleReset={this.handleReset} />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        splits: state.splits,
        user: state.user
    }
}

export default connect(mapStateToProps, { fetchSplits })(WorkoutContainer)