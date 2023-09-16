import { useState } from 'react';
import './App.css'
import LikeButton from './components/likeButton/LikeButton';
import ColorTheme from "./components/colorTheme/ColorTheme";
import Loading from "./components/SpinnerComponent/Loading";
import PokeList from './components/reactPokeAPI/PokeList';


function App() {
    const [dark, setDark] = useState("light");
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <div>
                {isLoading
                    ? <Loading />
                    : <div className={`${dark}`}>
                        <LikeButton />
                        <ColorTheme setIsLoading={setIsLoading} isloading={isLoading}
                            setDark={setDark} dark={dark} />
                    </div>}
            </div>
            <div className='containerApp'>
                <PokeList />
            </div>
        </>

    )
}

export default App
