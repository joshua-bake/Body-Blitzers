import React from 'react'

interface ICollectionAlbum {
    name: string,
    image: string,
    targeted: string
}

const CollectionAlbum = ({ name, image, targeted }: ICollectionAlbum) => {

    return <div>
        <div className="card is-active">
            <div className="card-header">
                <h3 className="card-header-title">{name}</h3>
            </div>
            <div className="card-image">
                <figure className="image">
                    <img src={image} alt={name} />
                    <button className="is-static btn-style-2 is-capitalized">{targeted}</button>
                </figure>
            </div>
        </div>
    </div>
}

export default CollectionAlbum