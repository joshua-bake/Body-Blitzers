import React from 'react'
import CollectionAlbum from './CollectionAlbum';

interface Collection {
    name: string,
    image: string,
    gifUrl: string
}

const Collection = () => {

    const exercisesOptions = {
        method: 'GET',
        // params: { limit: '30' },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    const [exercises, setExercises] = React.useState<null | Array<Collection>>(null)

    React.useEffect(() => {
        async function fetchData() {
            const resp = await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=64', exercisesOptions)
            const exercises = await resp.json()
            setExercises(exercises)
        }
        fetchData()
    }, [])

    console.log(name)
    if (!exercises) {
        return <div>
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    }

    return <div className='columns is-multiline'>
        {(exercises)?.map(catalog => {
            return <div key={catalog} className='column is-one-quarter-desktop is-one-third-tablet'>
                <CollectionAlbum
                    name={catalog.name}
                    image={catalog.gifUrl}
                />
            </div>
        })}
    </div>
}

export default Collection