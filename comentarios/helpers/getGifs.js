/* LOS HELPERS COMO NOMBRAMOS LA CARPETA SON FUNCIONES QUE HACES CIERTO TRABAJO 
EN ESPECIFICO */

export const getGifs = async ( category ) => {
        
    /* UTILIZAMOS EL ENCODE URI PARA QUE REEMPLAZE LOS ESPACIOS DE LA CONSULTA */
    const url = `https://api.giphy.com/v1/gifs/search?api_key=8tVOSoRPmuNXYTF8YXO8mGQTEU1ocPFj&q=${ encodeURI(category) }&limit=10`;
    
    /* HACEMOS LA PETICION HTTP */
    const resp = await fetch(url);
    const { data } = await resp.json();

    /* USAMOS EL MAP PARA MODIFICAR LA RESPUESTA Y QUE NOS MANDE LO QUE NECESITAMOS SOLAMENTE */
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            /* AQUI PODEMOS PONER (?) EN CASO DE QUE NO VENGA LA IMAGEN */
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

} 