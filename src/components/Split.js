import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Split extends Component {
    render() {
        return(
            <div id='split' key={this.props.split.id}>                                    
                <li id='split-item'>
                    <Link to={`/exercises/${this.props.split.id}`}>{this.props.split.name}</Link>

                </li>
            </div>
        )
    }
}
  
export default Split