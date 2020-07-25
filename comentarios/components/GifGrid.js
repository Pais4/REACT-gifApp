/* EL USEEFFECT ME PERMITIRA EJECUTAR CIERTO CODIGO DE MANERA CONDICIONAL */
import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    /* RECIBE LA FUNCION QUE QUEREMOS EJECUTAR, EL SEGUNDO ELEMENTO QUE LE MANDAMOS
    SERA UN ARREGLO DE DEPENDENCIAS */
    /* SI MANDAMOS LOS [] VACIOS SIGNIFICA QUE SOLO QUEREMOS QUE LA FUNCION SE 
    EJECUTE CUANDO EL COMPONENTE ES RENDERIZADO POR PRIMERA VEZ */
    useEffect(() => {
        /* COMO LA FUNCION DE LOS HELPERS ME RETORNA UNA PROMESA */
        getGifs( category )
            // .then( imgs => setImages(imgs) )
            /* COMO EL PRIMER ARGUMENTO ES MANDADO AL OTRO SE PUEDE PONER ASI */
            .then( setImages );
    
    /* [CATEGORY] -> SI LA CATEGORIA CAMBIA ENTONCES SE VOLVERA A EJECUTAR EL EFFECT */
    }, [ category ])

    return (
        <>
            <h3>{ category }</h3>

            <div className="card-grid">
                
                    { 
                        /* COMO ESTAMOS USANDO LAS LLAVES () SIGNIFICA QUE RETORNAMOS UN OBJETO */
                        /* DESESTRUCTURAMOS EL OBJETO DIRECTAMENTE PARA LIMPIAR EL CODIGO */
                        /* images.map(({ id, title }) => SI ES NECESARIO */
                        images.map( img => (
                            <GifGridItem 
                                key={ img.id }
                                /* MANDAMOS POR LOS PROPS CON EL OPERADOR SPREAD DE LOS OBJETOS
                                PARA QUE SEA MAS FACIL TRABAJAR CON EL OBJETO Y DESESTRUCTURACION */
                                // img={ img }
                                { ...img }
                            />
                        ))
                    } 
                
            </div>
        </>
    )
}
