import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Split extends Component {

    state = {
        count: 0
    }

    increment = () => {
        console.log(this)

        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return(
            <div id='split' key={this.props.split.id}>                                    
                <li id='split-item'>
                    <Link to={`/exercises/${this.props.split.id}`}>{this.props.split.name}</Link>

                </li>

                <button onClick={this.increment} >{this.state.count}</button>
            </div>
        )
    }
}
  
export default Split