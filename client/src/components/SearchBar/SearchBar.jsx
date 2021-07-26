import React from 'react';
 

export default function SearchBar(){
    return(
        <form className='search'>
            <input type='text' />
            <input type="submit" value='Buscar' />
        </form>
    )
}