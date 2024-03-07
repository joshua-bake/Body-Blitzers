import React from "react"

interface IVideoLibrary {
    library: Array<string>,
    name: string
}

const VideoLibrary = ({ library }: IVideoLibrary) => {
    console.log(library)
    return <section>
        <div>
            hello
        </div>
    </section>


}

export default VideoLibrary