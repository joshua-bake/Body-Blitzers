import React from 'react'

interface ICollectionAlbum {
    name: string,
    image: string
}

const CollectionAlbum = ({ name, image }: ICollectionAlbum) => {

    return <div>
        <div className="card is-active">
            <div className="card-header">
                <h3 className="card-header-title">{name}</h3>
            </div>
            <div className="card-image">
                <figure className="image">
                    <img src={image} alt={name} />
                </figure>
            </div>
        </div>
    </div>

}

export default CollectionAlbum