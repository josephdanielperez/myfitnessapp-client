import React, { Component } from 'react'
import { connect } from 'react-redux'
import WorkoutForm from './WorkoutForm'
import Workout from './Workout'

import { fetchSplits, filterExercises } from '../actions/allActions'

class WorkoutContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            split: '1',
            length: '3',
            exercises: []         
        }
    }

    componentDidMount() {
        this.props.fetchSplits();
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ exercises: filterExercises(this.state.split, this.state.length) })
        setTimeout(this.setToggle, 50)
    }

    setToggle = () => {
        this.setState({ toggle: true })
    }
  
    render() {
        if (!this.state.toggle) {
            return(
                <div id='content'>
                    <div id='container'>
                        <WorkoutForm splits={this.props.splits} state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    </div>
                </div>
            )
        } else {
            return(
                <div id='content'>
                    <div id='container'>
                        <Workout exercises={this.state.exercises} />
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
  
export default connect(mapStateToProps, { fetchSplits })(WorkoutContainer);