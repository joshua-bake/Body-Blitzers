import React from "react"

interface IVideoLibrary {
    name: string,
    image: string,
    instruction: string,
    targets: string,
    secondaryTargets: string
}

// Card Library to update Exercises Page
const VideoLibrary = ({ name, image, instruction, targets, secondaryTargets }: IVideoLibrary) => {

    const [show, setShow] = React.useState(false)
    // console.log(show)

    // function to show or hide elements on the cards
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
                    <button className="is-static btn-style-1 is-capitalized">Targets: {targets}</button>
                    <br />
                    <br />
                    {show ? <p>{instruction}</p> : ''}
                </figure>
            </div>
        </div>
    </div>
}

export default VideoLibrary
