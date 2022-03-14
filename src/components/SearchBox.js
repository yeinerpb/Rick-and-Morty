import React, { useState } from 'react';
import axios from 'axios';

const SearchBox = ({setLocationType}) => {
    const [ search, setSearch ] = useState("")
    const seartchType = () =>{
        axios.get(`https://rickandmortyapi.com/api/location/${search}`)
        .then((res) =>  setLocationType(res.data))
    }


    return (
        <div>
            <input 
                type= "text" 
                onChange={e => setSearch(e.target.value)} 
                value = {search}
                placeholder="type a location ID"
            />
            <button onClick={seartchType}>
                Search
            </button>
        </div>
    );
};

export default SearchBox;