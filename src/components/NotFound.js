import React from 'react';

const Home = () =>

    <div>
        <p>sorry, your page was not found...</p>
        <br /><br /><br />
        <p>Head home below!</p>
        <button onClick={() => window.location.href='/'}>home</button>
    </div>


export default Home;