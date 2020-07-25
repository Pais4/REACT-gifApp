import React, { useState } from 'react'

export const GifExpertApp = () => {

    // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    const handleAdd = () => {

        /* PARA AÑADIR UN NUEVO ELEMENTO AL ARREGLO USAMOS EL OPERADOR SPREAD */
        // setCategories([...categories, 'Yamakasi'])
        /* PARA TENERLO AL INICIO */
        setCategories(['Yamakasi', ...categories])

        /* TAMBIEN SE PUEDE HACER DE LA SIGUIENTE MANERA */
        /* HACIENDO USO DEL CALLBACK DEL SETCATEGORIES */
        // setCategories(cat => [...cat, 'Yamakasi'])
    }

    return(
        <>
            <h2>Gif Expert App</h2>
            <hr />
            {/* PARA MOSTRAR CADA UNO DE LOS ELEMENTOS UTILIZAMOS UN MAP (ACTUA COMO UN FOR EACH) */}
            {/* EL MAP SIRVE PARA TRANSFORMAR CADA UNO DE LOS ELEMENTOS DENTRO DEL ARRAY */}
            {/* EL MAP RECIBE DOS ELEMENTOS, EL ELEMENTO DEL ARREGLO Y EL INDICE  */}
            {/* SE LE DEBE PASAR EL KEY QUE EN ESTE CASO SERA LA CATEGORY  */}
            {/* <ol>
                {
                    categorias.map((category, idx) => {
                    return <li>{idx} {category}</li>
                    })
                }
            </ol> */}
            <ol>
                {
                    categories.map( category => {
                        return <li key= {category}> {category} </li>
                    })
                }
            </ol>

        </>
    );
}
