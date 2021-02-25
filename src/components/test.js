import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSplits } from '../actions/allActions'

class test extends Component {

    componentDidMount() {
        this.props.fetchSplits();
    }

    splits = () => {
        return this.props.splits
    }
  
    render() {
        return(
            <div id='content'>
                <div id='container'>
                    { this.splits() }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        splits: state.splits
    }
}
  
export default connect(mapStateToProps, { fetchSplits })(test);