import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchSplits } from '../actions/workoutsActions'

const GeneratedForm = ({ splits }) => {
    return (
        <div>
            <h1>Splits List</h1>
            { splits.map(split => <option value={split.id} key={split.id}>{split.name}</option>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { splits: state.splits }
}

export default connect(mapStateToProps)(GeneratedForm);