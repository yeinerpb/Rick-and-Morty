
import React, { useEffect, useState } from 'react';
import ResidentsInfo from './ResidentsInfo';

const ResidentsList = ({characters}) => {
   
console.log(characters)
    

    return (
        <div>
             {characters?.map((character)=>
             <ResidentsInfo
                characterUrl={character}
                key={character}
              />     
             )}
        </div>
    );
};

export default ResidentsList;