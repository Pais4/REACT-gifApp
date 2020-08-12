import React, { useState } from 'react';
import propTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories(cat => [ inputValue, ...cat ])
            setInputValue('')
        }
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el Gif a buscar"
                        value= { inputValue }
                        onChange= { handleInputChange }
                    />
                </div>
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}
