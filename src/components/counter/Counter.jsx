import { React, useState } from 'react'
import "./counter.css"

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const add = () => setCounter(prev => prev += 1);
    const subs = () => {

        if (counter <= 0) return 0;

        setCounter(prev => prev -= 1);
    }



    return (
        <div className='containerCounter'>
            <button onClick={subs}>-</button>
            <p>{counter}</p>
            <button onClick={add}>+</button>
        </div>
    )
}

export default Counter