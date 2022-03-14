import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import ResidentsList from './ResidentsList';

const LocationInfo = () => {
    const [ locationType, setLocationType] = useState ({});
    useEffect(() => {
        const random = Math.floor(Math.random () * 126 ) +1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then((res) =>  setLocationType(res.data));
    },[]);
    
console.log(locationType);
    return (
        <div className='location'>
            < SearchBox setLocationType={setLocationType}/>
            <h1>{locationType?.name}</h1>
            <ul className='list-location'>
                <li> <b>Type:</b> {locationType.type}</li>
                <li> <b> Dimension:</b> {locationType.dimension}</li>
                <li> <b>Population:</b> {locationType.residents?.length}</li>
            </ul>
            <h2> <b>Residents</b> </h2>
            <ResidentsList characters={locationType.residents}/>
        </div>
    );
};

export default LocationInfo;