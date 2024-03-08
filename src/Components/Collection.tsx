import React from 'react'
import CollectionAlbum from './CollectionAlbum';
import ScrollToTop from 'react-scroll-to-top';

interface Collection {
    name: string,
    image: string,
    gifUrl: string,
    target: string,
    targeted: string
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
            const resp = await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=1400', exercisesOptions)
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

    return <section>
        <section>
            <h2 className='is-size-3 has-text-centered pb-3'>Welcome to Our Video Library</h2>
        </section>
        <div className='container'>
            <div className='columns is-multiline'>
                <ScrollToTop />
                {(exercises)?.map(catalog => {
                    return <div className='column is-one-quarter-desktop is-one-third-tablet'>
                        <CollectionAlbum
                            name={catalog.name}
                            image={catalog.gifUrl}
                            targeted={catalog.target}
                        />
                    </div>
                })}
            </div>
        </div>
    </section>
}

export default Collection