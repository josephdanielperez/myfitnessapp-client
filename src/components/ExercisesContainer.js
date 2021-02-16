import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchExercises } from '../actions/workoutsActions'
import UsersForm from './UsersForm'
import GeneratedList from './GeneratedList'

class ExercisesContainer extends Component {

    componentDidMount() {
        this.props.fetchExercises()
    };

    render() {
        return (
            <div>
                <GeneratedList />
            </div>
        );
    }
}

export default connect(null, { fetchExercises })(ExercisesContainer);