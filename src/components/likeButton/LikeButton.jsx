import { React, useState } from 'react'
import "./likeButton.css"
import Button from './Button'

const LikeButton = () => {

    const [like, setLike] = useState(0);
    const [likes, setLikes] = useState(0)
    const [colorBtn1, setColorBtn1] = useState(null);
    const [colorBtn2, setColorBtn2] = useState(null);


    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];


    const handleClickLike = () => {
        setLike(prev => prev += 1)
        setColorBtn1(colors[Math.floor(Math.random() * colors.length)]);

    }

    const handleClickLikes = () => {
        setLikes(prev => prev += 1)
        setColorBtn2(colors[Math.floor(Math.random() * colors.length)]);

    }
    // console.log(newColor);

    return (
        <div className='containerBtn'>
            <Button handleClick={handleClickLike} likes={like} color={colorBtn1} />
            <Button handleClick={handleClickLikes} likes={likes} color={colorBtn2} />
        </div>
    )
}

export default LikeButton