import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

    return (
        <section className="is-large">
            <div className='columns homeColumns'>
                <div className='column is-half'>
                    <section className="hero is-medium ">
                        <div className="hero-body">
                            <h1 className='has-text-weight-bold pb-5 is-size-1'>Body Blitzers</h1>
                            <p className='has-text-primary-light'>Welcome to our curated online library where you can find some of the most common exercise movesets.</p>
                        </div>
                    </section>
                </div>
                <div className='column is-half'>
                    <figure className="image ">
                        <img src="src/assets/logo-no-background.png" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Home