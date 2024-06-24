import { useState, useEffect } from 'react';
import { Wildcard } from './Wildcard';
import { getWildcardsUser } from '../../services/Wildcard';
import PropTypes from 'prop-types';



export function WildcardsBar({idUser, changeQuestion, activeShield, delectedAnwers, addTime}) {

    const [wildcards, setWildCards] = useState([]);
    const [usedComodin, setUsedComodin] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getWildcardsUser(idUser);
                setWildCards(response);
                console.log(response);
                return response;
            } catch (error) {
                console.error('Error fetching trivia data getWildcardsUser:', error);
            }
        };
    
        fetchData();
    },[usedComodin]);

    const  comodinUse=()=> {
        setUsedComodin(usedComodin+1)
    }

    return (
        <>
          {wildcards.map((wildcard, index) => (
            
              <Wildcard
                key={index}
                wildcard={wildcard}
                funcionalidad={wildcard.wildcard.name === 'Salto' ? changeQuestion:(wildcard.wildcard.name === 'Escudo' ?activeShield:(wildcard.wildcard.name === '50/50' ?delectedAnwers:addTime))}
                comodinUse={comodinUse}
              />
            
          ))}
        </>
      );
      
}

WildcardsBar.propTypes={
    idUser:PropTypes.number.isRequired,
}