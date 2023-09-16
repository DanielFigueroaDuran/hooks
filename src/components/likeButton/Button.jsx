import React from 'react'

const Button = ({ handleClick, likes, color }) => {

    //console.log(color);
    return (
        <button style={{ background: `${color}` }} onClick={handleClick}>{likes} Likes</button>
    )
}

export default Button