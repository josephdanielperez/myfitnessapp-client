import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSplits } from '../actions/workoutsActions'
import GeneratedForm from './GeneratedForm'
import GeneratedList from './GeneratedList'
import WorkoutsGenerate from './WorkoutsGenerate'

class GeneratedContainer extends Component {

    componentDidMount() {
    };

    render() {
        return (
            <div>
                <WorkoutsGenerate />
                <GeneratedForm />
            </div>
        );
    }
}

export default connect(null, { fetchSplits })(GeneratedContainer);