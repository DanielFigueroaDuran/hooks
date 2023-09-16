import { React, useState } from 'react'
import "./colorTeme.css"
import Button from './Button'
import Loading from '../SpinnerComponent/Loading';

const ColorTheme = ({ setIsLoading, isLoading, setDark, dark }) => {
    //const [dark2, setDark2] = useState("light");
    // const [isloading, setIsLoading] = useState(false);

    const handleClick = () => {
        // console.log('hola');
        setDark(prev => prev === "light" ? "dark" : "light");

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        //console.log(loading);
        //console.log(dark);
    }

    return (
        <div className='containerTheme'>
            {isLoading
                ? <Loading />
                : <div className={`${dark}`}>
                    <h1>¿Qué es la naturaleza?</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas sit, consectetur asperiores dolorum illum consequatur labore blanditiis debitis consequuntur fugit sint reprehenderit quibusdam maxime eos architecto quisquam nobis omnis itaque?</p>
                    <p>Sit, expedita quae eius porro ex velit eveniet ea facere ipsa veritatis dolor laborum est magni voluptas, ut aliquam, a ab dignissimos distinctio dolores eos qui asperiores sequi earum. Iste.</p>
                    <Button handleClick={handleClick} isLoading={isLoading} dark={dark} />
                </div>
            }
        </div>

    )
}

export default ColorTheme