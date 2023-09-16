import React from 'react'

const JokeCard = ({joke}) => {
    //console.log(joke.joke);
  return (
    <div className="cardJoke" >{joke.joke}</div>
  )
}

export default JokeCard