import React from 'react'
import "./dadJokes.css"

const ButtonJoke = ({ setCategories, text, setIsLoading }) => {

  const handleClick = () => {
  setCategories(text);

  setIsLoading(true);

  setTimeout(() => {
    setIsLoading(false)
  }, 1000);


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