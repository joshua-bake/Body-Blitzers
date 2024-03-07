import React from 'react'
import VideoLibrary from './VideoLibrary';

interface Iexercises {
    name: string,
    gifURL: string,
    instructions: string,
    bodyPart: string
}

const Exercises = () => {


    // [search, setSearch] = React.useState('')

    // async function handleSearch() {
    //     if (search) {
    //         const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions)
    //     }
    // }

    const exercisesOptions = {
        method: 'GET',
        // params: { limit: '30' },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    const [exercises, setExercises] = React.useState()

    React.useEffect(() => {
        async function fetchData() {
            const resp = await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=30', exercisesOptions)
            const exercises = await resp.json()
            setExercises(exercises)
        }
        fetchData()
    }, [])

    // console.log(exercises)


    if (!exercises) {
        return <div>
            <h1>loading....</h1>
        </div>
    }

    return (
        // <div>
        //     <h2>Exercises Landing page</h2>
        // </div>
        // !Fix passing props
        <section className="section">
            <div className="container">
                <div className="columns is-multiline">
                    <VideoLibrary
                        library={exercises}
                    />
                </div>
            </div>
        </section>

    )
}

export default Exercises