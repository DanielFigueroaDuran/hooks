import { useState, useEffect } from 'react';
import './App.css'
import LikeButton from './components/likeButton/LikeButton';
import ColorTheme from "./components/colorTheme/ColorTheme";
import Loading from "./components/SpinnerComponent/Loading";
import PokeList from './components/reactPokeAPI/PokeList';
import Button from './components/dadJokes/ButtonJoke';
import JokeList from './components/reactPokeAPI/JokeList';
import ShoppingCart from './components/carritoDeComprasReducer/ShoppingCart';


function App() {
    const [dark, setDark] = useState("light");
    const [isLoading, setIsLoading] = useState(false);

    const [categories, setCategories] = useState("");
    const [jokes, setJokes] = useState([]);

    const apiDadJoke = `https://icanhazdadjoke.com/search?term=${categories}&limit=5`;

    const getData = async (url) => {
        const response = await fetch(url, {
            headers: {
                "Accept": "application/json",
            }
        });
        const data = await response.json();
        const newData = data.results;

        //console.log(newData);
        //setJokes(newData);
        return newData;
    };


    useEffect(() => {
        getData(apiDadJoke).then(data => setJokes(data));
    }, [categories])

    //console.log(categories);

    return (
        <>
            {/* <div>
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
            </div> */}
            {/* <div className='containerJoke'>
                <Button text={"Birds"} setCategories={setCategories} setIsLoading={setIsLoading} />
                <Button text={"Car"} setCategories={setCategories} setIsLoading={setIsLoading} />
                <Button text={"Hipster"} setCategories={setCategories} setIsLoading={setIsLoading} />
                <Button text={"Dad"} setCategories={setCategories} setIsLoading={setIsLoading} />
            </div>
            <div className='containerLoading'>
                {isLoading
                    ? <Loading />
                    : <JokeList jokes={jokes} />
                }
            </div> */}

            {/* Carrito de compras con reducer */}

            <ShoppingCart/>
        </>

    )
}

export default App
