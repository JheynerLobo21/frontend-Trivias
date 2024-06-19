import { useState, useEffect } from 'react';
import { Wildcard } from './Wildcard';
import { getWildcards } from '../../services/Wildcard';
import PropTypes from 'prop-types';



export function WildcardsBar({idUser}) {
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
                <Wildcard key={index} wildcard={wildcard} />
            ))}
        </>
    );
}

WildcardsBar.propTypes={
    idUser:PropTypes.number.isRequired,
}