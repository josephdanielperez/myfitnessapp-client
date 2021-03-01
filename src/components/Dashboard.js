import React from 'react';

const Dashboard = props => {

    return (
        <div id='content'>
            <div id='container'>
                <img src='https://media.giphy.com/media/Ae9RmQOtH8vmXCMlc4/giphy.gif' alt='MyFitnessApp Home Page'/>
                <h3>FITNESS MADE SIMPLE</h3>
                <h3>Status: {props.loggedInStatus} </h3>
            </div>
        </div>
    )

}

export default Dashboard;