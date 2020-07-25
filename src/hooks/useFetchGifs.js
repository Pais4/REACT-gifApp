/* EL (USE) SIGIFINICA QUE ES UN CUSTOM HOOK */
/* LOS HOOKS NO SON MAS QUE FUNCIONES */

import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    /* LOS CUSTOM HOOKS TAMBIEN PUEDEN TENER UN ESTADO */
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs(category)
            .then( img => {
                /* TENEMOS QUE MANEJAR LA MISMA ESTRUCTURA QUE ARRIBA */
                setState({
                    data: img,
                    loading: false
                });
            })

    }, [category])

    return state; // state -> {data: [], loading: true}
}