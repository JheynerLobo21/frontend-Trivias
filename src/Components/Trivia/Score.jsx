import PropTypes from 'prop-types';

export const Score = ({ score }) => {
    return (
        <div>
            <h3 className='centered'>Puntaje: {score}</h3>
        </div>
    );
};

Score.propTypes={
    score:PropTypes.number.isRequired,
};

