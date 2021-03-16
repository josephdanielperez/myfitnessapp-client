import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchSplits } from '../actions/allActions'

class ExercisesContainer extends Component {

    state = {}

    componentDidMount() {
        this.props.fetchSplits()
    }

    handleClick = (e) => {
        const item = e.target

        console.log(item.innerHTML)
        item.innerHTML = `${Number(item.innerHTML + 1)}`
    }
  
    render() {
        return(
            <div id='content'>
                <div id='container'>
                    <div id='workout-div'>
                        <h1>Splits</h1>
                        <ul>
                            { this.props.splits.map(split =>
        
                                <div id='split' key={split.id}>
                                    
                                    <li id='split-item'>
                                        <Link to={`/exercises/${split.id}`}>{split.name}</Link>
                                    </li>
                                    <button className='complete-btn' onClick={this.handleClick}>1</button>
                                </div>
                            ) }
                        </ul>
                    </div>
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
  
export default connect(mapStateToProps, { fetchSplits })(ExercisesContainer)