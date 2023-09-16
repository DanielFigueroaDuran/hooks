import { React, useEffect, useState } from 'react'
import { getInfoPokemon } from "./data.js";
import "./pokeapi.css"
import Button from './Button.jsx';

const PokeCard = ({ pokemon, pokemones, setPokemones }) => {
    //console.log(pokemon.url);
    const [infoPokemon, setInfoPokemon] = useState([]);
    // const [newPokemones, setNewPokemones] = useState([]);

    const apiInfoPoke = pokemon.url;


    //console.log(infoPokemon);

    useEffect(() => {
        getInfoPokemon(apiInfoPoke).then(data => setInfoPokemon(data));
    }, []);



    // console.log(pokemones);

    const handleClick = () => {
        const deleteId = pokemones.filter(id => infoPokemon.name !== id.name);
        setPokemones(deleteId);
        // console.log(info);
    };

    return (
        <div className={infoPokemon?.id % 2 === 0 ? "containerCardPar" : "containerCardImpar"}>
            <p>{infoPokemon?.name}</p>
            <p>{infoPokemon?.id}</p>
            <img src={infoPokemon.sprites?.front_shiny} alt="" />
            <Button handleClick={handleClick} text={"Eliminar"} classN={"btnCard"} />
        </div>

    );


}

export default PokeCard