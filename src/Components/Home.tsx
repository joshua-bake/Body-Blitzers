import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

    function handleClick() {
        <Link to='/exercises'></Link>
    }
    return (
        <div>
            <div className="columns">
                <div className="column has-text-centered">
                    <h1 className='has-text-weight-bold has-text-primary-light'>Body Blitzers</h1>
                    <p className='has-text-primary-light'>Welcome to our curated online library where you can find some of the most common exercise movesets.</p>
                    <button onClick={handleClick}>Exercises</button>
                </div>
                <div className="column">
                    <figure className="image ">
                        <img src="src/assets/body-blitzers-high-resolution-logo.jpeg" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Home