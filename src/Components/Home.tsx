import image from '../assets/logo-no-background.png'
import React from 'react'
import motto from '../assets/fitness-motto-background.jpeg'

const Home = () => {

    return (
        <section className="is-large">
            <div className='columns homeColumns'>
                <div className='column is-half'>
                    <section className="hero is-medium pl-6">
                        <h1 className='has-text-weight-bold pb-5 is-size-1'>Body Blitzers</h1>
                        <p className='has-text-primary-light'>Welcome to our curated online library where you can find some of the most common exercise movesets.</p>
                        <p className='has-text-primary-light'>Whether you're a beginner or veteran, there is something for everyone here regardless of skill level.</p>
                        <img src={motto} alt="fitness-motto" />
                    </section>
                </div>
                <div className='column is-half'>
                    <figure className="image ">
                        <img className='pr-5 mt-5' src={image} alt='logo-no-background' />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Home