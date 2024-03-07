import React from "react"
import { Link } from 'react-router-dom'

interface IVideoLibrary {
    name: string,
    image: string,
    instruction: string,
    targets: string
}

// Card Library to update Exercises Page
const VideoLibrary = ({ name, image, instruction, targets }: IVideoLibrary) => {

    const [show, setShow] = React.useState(false)
    // console.log(show)
    function toggleState() {
        setShow(!show)
    }

    return <div>
        <div className="card is-active" onClick={toggleState}>
            <div className="card-header">
                <h3 className="card-header-title">{name}</h3>
            </div>
            <div className="card-image">
                <figure className="image">
                    <img src={image} alt={name} />
                    {show ? <h2>{targets}</h2> : ''}
                    <br />
                    {show ? <p>{instruction}</p> : ''}
                </figure>
            </div>
        </div>
    </div>

}

export default VideoLibrary
