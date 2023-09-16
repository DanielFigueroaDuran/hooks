import React from 'react'
import "./dadJokes.css"

const ButtonJoke = ({ setCategories, text }) => {

  const handleClick = () => {
  setCategories(text);
    // if (text === 'Car') {
    //   setCategories('car');
    // }else if(text === 'Birds'){
    //   setCategories('birds');
    // }else if (text === 'Hipster') {
    //   setCategories('hipster');      
    // }else if (text === 'Dad') {
    //   setCategories('dad');
    // }
  };

  return (
    <button className='btnJoke' onClick={handleClick} >{text}</button>
  )
}

export default ButtonJoke