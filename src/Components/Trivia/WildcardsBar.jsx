import { useState, useEffect } from 'react';
import { Wildcard } from './Wildcard';
import { getWildcards } from '../../services/Wildcard';
import PropTypes from 'prop-types';



export function WildcardsBar({idUser,changeQuestion,activeShield}) {
    const [wildcards, setWildCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getWildcards(idUser);
                setWildCards(response);
                console.log(response);
                return response;
            } catch (error) {
                console.error('Error fetching trivia data getWildcards:', error);
            }
        };
    
        fetchData();
    },[]);

    return (
        <>
          {wildcards.map((wildcard, index) => (
            
              <Wildcard
                key={index}
                wildcard={wildcard}
                funcionalidad={wildcard.wildcard.name === 'Salto' ? changeQuestion:(wildcard.wildcard.name === 'Escudo' ?activeShield:{})}
              />
            
          ))}
        </>
      );
      
}

WildcardsBar.propTypes={
    idUser:PropTypes.number.isRequired,
}