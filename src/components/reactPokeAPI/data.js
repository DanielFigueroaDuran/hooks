export const getPokemon = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data.results[0].url);
        return data.results;
};
    
export const getInfoPokemon = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.results[0].url);
    return data;
}