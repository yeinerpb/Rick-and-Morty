import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResidentsList from './ResidentsList';

const ResidentsInfo = ({characterUrl}) => {
    const [character,setCharacter] = useState({});

    useEffect(() => {
        axios.get(characterUrl)
        .then((res) => setCharacter(res.data));
    },[characterUrl])
    return (
        <div className='card'>
            
            <img src={character.image}alt="" />
            <div className='info-residents'>
                
                <h3> <b>{character?.name}</b> </h3>
                <ul>
                    <li> <b>{character?.status}</b></li>
                    <li>Origin: <b>{character.origin?.name}</b> </li>
                    <li> Episodes where appear: <b>{character.episode?.length}</b></li>
                </ul>
            </div>
        </div>
    );
};

export default ResidentsInfo;