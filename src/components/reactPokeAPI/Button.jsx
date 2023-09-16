import React from 'react'

const Button = ({ handleClick, text, classN }) => {


    return (
        <button className={classN} onClick={handleClick}>{text}</button>
    )
}

export default Button