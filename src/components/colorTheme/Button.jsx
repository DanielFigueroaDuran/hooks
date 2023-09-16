import React from 'react'


const Button = ({ handleClick, isLoading, dark }) => {

    return (
        <button className='btnTeme' onClick={handleClick}>{isLoading} {dark.charAt(0).toUpperCase().concat(dark.slice(1))}</button>

    )
}

export default Button