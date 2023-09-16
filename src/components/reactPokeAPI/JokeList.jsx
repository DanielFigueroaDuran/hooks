import React from 'react'
import JokeCard from './JokeCard'

const JokeList = ({ jokes }) => {
   // console.log(jokes);
    return (
        <div className='containerJokes' >
            {jokes.map((joke, i) => <JokeCard joke={joke} key={i} />)}
        </div>
    )
}

export default JokeList