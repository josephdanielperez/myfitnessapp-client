import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>

    <div>
        <p>sorry, your page was not found...</p>
        <br /><br /><br />
        {/* below is less snappy than link due to reloading window */}
        {/* <button onClick={() => window.location.href='/'}>home</button> */}
        <Link to='/'><button>return home</button></Link>
    </div>


export default Home;