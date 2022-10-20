export const getGif = async ( search ) =>{
    
    const key = 'HxXXkMeIcWaoSsEHKnEx5FWijzJaSEy8';
    const baseUrl ='https://api.giphy.com/v1/gifs/search?';
    const url = `${baseUrl}api_key=${key}&q=${search}&limit=5`;

    const resp = await fetch( url );
    const { data } = await resp.json();

    return data;
}