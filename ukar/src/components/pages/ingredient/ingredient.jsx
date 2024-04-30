import React, { useState } from 'react';
import axios from 'axios'

function Ingredient() {
    //hooks
    const [search, setSearch] = useState('');
  
    //FONCTION
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    
    const handleSearchSubmit = async(e)=>{
        e.preventDefault()
        const reponse = axios.get(`http://localhost:8000/ingredient/Search/${search}`)
        console.log((await reponse).data)
    }
    return (
        <div>
           
                <h1>Ingrédients</h1>
                <form >
                    <input type="text" value={search} className = 'searchInput'onChange={handleSearch}/>
                    <input type="button" value="OK" onClick={handleSearchSubmit}/>
                </form>
            
            
        </div>
    );
}

export default Ingredient;
