import { React, useEffect, useState } from 'react'
import PokeCard from './PokeCard';
import { getPokemon, getInfoPokemon } from "./data.js";
import Button from './Button';

const PokeList = () => {
    const [pokemones, setPokemones] = useState([]);
    const [counterOff, setCounterOff] = useState(20)

    //console.log(counterOff);

    //console.log(pokemones);
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/`;
    const apiUrlNewPokemones = `https://pokeapi.co/api/v2/pokemon?limit=${10}&offset=${counterOff}`;

    //console.log(infoPokemones);

    // console.log(counterPokemon);


    useEffect(() => {
        getPokemon(apiUrl).then(data => setPokemones(data));
        //getPokemon(apiUrlNewPokemones).then(data => setNewPokemones(data));
    }, []);


    //console.log(newPokemones);
    //console.log(counterPokemon);

    const handleClick = () => {
        setCounterOff(prev => prev += 10);
        // setPokemones(prev => [...prev, ...newPokemones]);
        //console.log(counterOff);
        getPokemon(apiUrlNewPokemones).then(data => setPokemones(prev => [...prev, ...data]));
    };

    return (
        <div className='containerPoke'>
            <Button handleClick={handleClick} text={"Give me more!"} classN={"btn"} />
            <div className='container'>
                {pokemones.map((pokemon, i) => <PokeCard pokemon={pokemon} key={pokemon.name} pokemones={pokemones} setPokemones={setPokemones} />)}
            </div>
        </div>
    )
}

export default PokeList